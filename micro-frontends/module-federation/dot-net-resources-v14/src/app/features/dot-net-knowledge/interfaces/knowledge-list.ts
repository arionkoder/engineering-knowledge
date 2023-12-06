export interface Resource {
  name: string;
  link: string;
}

export type Lang = 'en' | 'es';

export type Mediums = 'youtube' | 'books';

export type LanguageResources = { [key in Lang]: Resource[] };

export type KnowledgeList = { [key in Mediums]: Partial<LanguageResources> };


