import { render, screen } from "../test/test-utils";

import TopBooks from "../src/components/TopBooks";
import { BookType } from "../src/types/book";
import React from "react";

const dummyBooks: BookType[] = [
  {
    kind: " books#volume",
    id: "s1gVAAAAYAAJ",
    etag: "SL2BK0y3Exg",
    selfLink: "https://www.googleapis.com/books/v1/volumes/s1gVAAAAYAAJ",
    volumeInfo: {
      title: "Pride and Prejudice",
      authors: ["Jane Austen"],
      publisher: "C. Scribner's sons",
      publishedDate: "1918",
      description:
        "Austen’s most celebrated novel tells the story of Elizabeth Bennet, a bright, lively young woman with four sisters, and a mother determined to marry them to wealthy men. At a party near the Bennets’ home in the English countryside, Elizabeth meets the wealthy, proud Fitzwilliam Darcy. Elizabeth initially finds Darcy haughty and intolerable, but circumstances continue to unite the pair. Mr. Darcy finds himself captivated by Elizabeth’s wit and candor, while her reservations about his character slowly vanish. The story is as much a social critique as it is a love story, and the prose crackles with Austen’s wry wit.",
      readingModes: {
        text: true,
        image: false,
      },
      pageCount: 401,
      printedPageCount: 448,
      dimensions: {
        height: "18.00 cm",
      },
      printType: " BOOK",
      averageRating: 4,
      ratingsCount: 372,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "1.2.9.0.preview.2",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          " http://books.google.com/books/content?id=s1gVAAAAYAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE73Afv--fPUXtlvgeuiEiOJYBpYEE8yTqGdSkYuyayDiCZfxOjh_etMHBPI6PK4i1DuQjh7vNxOItX24tsFrzOKuwprgipxygAgVBlrVuPEG6mwQ8S7zEYiDlL-FNBu_Rm0LaDMx&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=s1gVAAAAYAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE702SgRguBxurBnO7Kca7smUXS4F_BEnnC0XVoTLwupl7FDGTk2DyodPvxtuwddN_C-Z7uLASar4UWqPrdEYKUOydRiFdLC3MbM2XhQzwXOmhFPluS0zhFNfVvFdKuUM_LOLqqsc&source=gbs_api",
      },
      language: "en",
      previewLink:
        "http://books.google.com.mx/books?id=s1gVAAAAYAAJ&hl=&source=gbs_api",
      infoLink:
        " https://play.google.com/store/books/details?id=s1gVAAAAYAAJ&source=gbs_api",
      canonicalVolumeLink:
        "https://play.google.com/store/books/details?id=s1gVAAAAYAAJ",
    },
    layerInfo: {
      layers: [
        {
          layerId: "geo",
          volumeAnnotationsVersion: 15,
        },
      ],
    },
    saleInfo: {
      country: "MX",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "MX",
      viewability: "NO_PAGES",
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: true,
      },
      pdf: {
        isAvailable: true,
      },
      webReaderLink:
        " http://play.google.com/books/reader?id=s1gVAAAAYAAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "NONE",
      quoteSharingAllowed: false,
    },
  },
  {
    kind: " books#volume",
    id: "s1gVAAAAYAAr",
    etag: "SL2BK0y3Exg",
    selfLink: "https://www.googleapis.com/books/v1/volumes/s1gVAAAAYAAJ",
    volumeInfo: {
      title: "Harry Potter",
      authors: ["J.K. Rowling"],
      publisher: "C. Scribner's sons",
      publishedDate: "1918",
      description:
        "Austen’s most celebrated novel tells the story of Elizabeth Bennet, a bright, lively young woman with four sisters, and a mother determined to marry them to wealthy men. At a party near the Bennets’ home in the English countryside, Elizabeth meets the wealthy, proud Fitzwilliam Darcy. Elizabeth initially finds Darcy haughty and intolerable, but circumstances continue to unite the pair. Mr. Darcy finds himself captivated by Elizabeth’s wit and candor, while her reservations about his character slowly vanish. The story is as much a social critique as it is a love story, and the prose crackles with Austen’s wry wit.",
      readingModes: {
        text: true,
        image: false,
      },
      pageCount: 401,
      printedPageCount: 448,
      dimensions: {
        height: "18.00 cm",
      },
      printType: " BOOK",
      averageRating: 4,
      ratingsCount: 372,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "1.2.9.0.preview.2",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          " http://books.google.com/books/content?id=s1gVAAAAYAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE73Afv--fPUXtlvgeuiEiOJYBpYEE8yTqGdSkYuyayDiCZfxOjh_etMHBPI6PK4i1DuQjh7vNxOItX24tsFrzOKuwprgipxygAgVBlrVuPEG6mwQ8S7zEYiDlL-FNBu_Rm0LaDMx&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=s1gVAAAAYAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE702SgRguBxurBnO7Kca7smUXS4F_BEnnC0XVoTLwupl7FDGTk2DyodPvxtuwddN_C-Z7uLASar4UWqPrdEYKUOydRiFdLC3MbM2XhQzwXOmhFPluS0zhFNfVvFdKuUM_LOLqqsc&source=gbs_api",
      },
      language: "en",
      previewLink:
        "http://books.google.com.mx/books?id=s1gVAAAAYAAJ&hl=&source=gbs_api",
      infoLink:
        " https://play.google.com/store/books/details?id=s1gVAAAAYAAJ&source=gbs_api",
      canonicalVolumeLink:
        "https://play.google.com/store/books/details?id=s1gVAAAAYAAJ",
    },
    layerInfo: {
      layers: [
        {
          layerId: "geo",
          volumeAnnotationsVersion: 15,
        },
      ],
    },
    saleInfo: {
      country: "MX",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "MX",
      viewability: "NO_PAGES",
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: true,
      },
      pdf: {
        isAvailable: true,
      },
      webReaderLink:
        " http://play.google.com/books/reader?id=s1gVAAAAYAAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "NONE",
      quoteSharingAllowed: false,
    },
  },
];

describe("TopBooks component tests", () => {
  it("Should render the books info", () => {
    render(<TopBooks books={dummyBooks} />);
    const title1 = screen.getByText(/pride and prejudice/i);
    expect(title1).toBeInTheDocument();

    const title2 = screen.getByText(/harry potter/i);
    expect(title2).toBeInTheDocument();
  });
});
