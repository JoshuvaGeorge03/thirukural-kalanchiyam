// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type Data = {
  name: string;
};

type thirukuralDetailObj = {
  section: {
    detail: [
      {
        name: string;
        chapterGroup: {
          detail: [
            {
              name: string,
              chapters: {
                detail: [
                  {
                    name: string;
                    start: number;
                    end: number;
                  }
                ];
              };
            }
          ];
        };
      }
    ];
  };
};

type resultThriukuralobj = {
  chapters: [
    {
      name: string;
      start: number;
      end: number;
      subChapters: [
        {
          name: string;
          start: number;
          end: number;
          sections: [
            {
              name: string;
              start: number;
              end: number;
            }
          ];
        }
      ];
    }
  ];
};

function normalizeThirukuralSectionJSON() {
  console.log("path", process.cwd(), __dirname);
  const thirukuralDetailsJSON = fs.readFileSync(
    path.join(process.cwd(), "thirukural-section-detail.json"),
    {
      encoding: "utf-8",
    }
  );
  const thirukuralDetailObj = JSON.parse(thirukuralDetailsJSON) as thirukuralDetailObj;
  const { section } = thirukuralDetailObj;
  const { detail } = section;
  // let start = 1;
  const detailArr = detail.map(d => {
    // const s = start;
    // let end = start;
    // return {
    //   name: d.name,
    //   start: s,
    //   end: end,
    //   subChapters: d.chapterGroup.detail.map(c => {
    //     return c.chapters.detail.map(cc => {
          
    //     })
    //   })
    // }
    // return d.chapterGroup.detail.map(c => {
    //   return c.chaptersthirukurals.detail.map(cc => {
        
    //   });
    // });
    let st = 1;
    let en = 1;
    const subChapters = d.chapterGroup.detail.map((s, index, arr) => {
      let start = 1, end = 1;
      const lessons = s.chapters.detail.map((c, index, arr) => {
        if(index === 0) {
          start = c.start
        }
        if(index === arr.length - 1) {
          end = c.end;
        }
        return {
          name: c.name,
          start: c.start,
          end: c.end
        };
      });

      if(index === 0) {
        st = start;
      }

      if(index === arr.length - 1) {
        en = end;
      }

      return {
        start,
        end,
        name: s.name,
        sections: lessons
      };
    });
    return {
      name: d.name,
      start: st,
      end: en,
      subChapters,
    };
  });
  // console.log("thtirukural detail", JSON.stringify(detailArr, null, 10));
  return detailArr;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // const kuralsFetch = await fetch('http://localhost:3000/api/thirukurals');
  // const kurals = await kuralsFetch.json();
  // console.log('kurals', kurals);
  res.status(200).json(normalizeThirukuralSectionJSON());
}
