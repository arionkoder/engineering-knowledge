export interface KnowledgeList {
  primary_resources: Partial<Resource>[];
  secondary_resources: Partial<Resource>[];
}

export interface Resource {
  name: string;
  expertise: string;
  channel: string;
  links: string[];
}
