export type BookType = {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title?: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    industryIdentifiers?: {
      type?: string;
      identifier?: number;
    }[];
    readingModes?: {
      text?: boolean;
      image?: boolean;
    };
    pageCount?: number;
    printedPageCount?: number;
    dimensions?: {
      height?: "18.00 cm";
    };
    printType?: string;
    categories?: string[];
    averageRating?: number;
    ratingsCount?: number;
    maturityRating?: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: {
      containsEpubBubbles: boolean;
      containsImageBubbles: boolean;
    };
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink?: string;
  };
  layerInfo?: {
    layers?: [
      {
        layerId?: "geo";
        volumeAnnotationsVersion?: 15;
      }
    ];
  };
  saleInfo?: {
    country: string;
    saleability: string;
    isEbook: boolean;
  };
  accessInfo?: {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: {
      isAvailable: boolean;
      acsTokenLink?: string;
    };
    pdf: {
      isAvailable: boolean;
      acsTokenLink?: string;
    };
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
  };
  searchInfo?: {
    textSnippet: string;
  };
};
