type ImageData = {
  name: string;
  arrayBuffer: () => Promise<ArrayBuffer>;
};

export interface Meal {
  id?: string;
  title: string;
  slug?: string;
  image: string | ImageData;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}
