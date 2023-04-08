export interface Kurals {
    kural: KuralEntity[];
    repo: string;
  }
  export interface KuralEntity {
    Number: number;
    Line1: string;
    Line2: string;
    Translation: string;
    mv: string;
    sp: string;
    mk: string;
    explanation: string;
    couplet: string;
    transliteration1: string;
    transliteration2: string;
  }