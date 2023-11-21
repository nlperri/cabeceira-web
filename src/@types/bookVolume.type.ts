export interface BookVolumeDataItems {
  items: BookVolumeData[]
}

export interface BookVolumeData {
    id: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
  }
  
  interface VolumeInfo {
    title: string;
    authors: string[];
    publishedDate: string;
    description: string;
    publisher: string;
    pageCount: string;
    imageLinks: ImageLinks;
  }
  
  interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
  }