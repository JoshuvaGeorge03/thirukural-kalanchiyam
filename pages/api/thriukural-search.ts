import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import type { KuralEntity, Kurals } from "../../thirukural-types/types";

function matchKural(kural: KuralEntity, searchString: string): boolean {
  const kuralKeys = Object.keys(kural) as Array<keyof KuralEntity>;
  return kuralKeys.some((kuralKey) => {
    const value = kural[kuralKey];
    if (isTypeOfString(value)) {
      const lowerCasedValue = value.toLowerCase();
      const searchStringLowerCase = searchString.toLowerCase();
      return lowerCasedValue.includes(searchStringLowerCase);
    }
    return false;
  });
}

function isTypeOfString(value: string | number): value is string {
  return typeof value === "string";
}

async function searchKurals(
  searchValue: string
): Promise<KuralEntity[] | null> {
  const bodyObj = JSON.parse(searchValue);
  const searchThriukuralString = bodyObj.val;
  if (searchThriukuralString) {
    const thrikuralsJson = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), "thirukural.json"), {
        encoding: "utf8",
      })
    ) as Kurals;
    const thirukrals = thrikuralsJson.kural;
    const matchedKurals = thirukrals.filter((kural) =>
      matchKural(kural, searchThriukuralString)
    );
    return matchedKurals.length > 0 ? matchedKurals : null;
  }
  return null;
}

export default async function nextHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const kural = await searchKurals(req.body);
  return res.status(200).json(kural);
}
