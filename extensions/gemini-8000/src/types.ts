interface CartLine {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    product: {
      id: string;
      title: string;
      hasAnyTag: boolean;
    };
  };
}

interface Cart {
  lines: CartLine[];
}

interface MergeCartLine {
  cartLineId: string;
  quantity: number;
}

interface MergeOperation {
  operations: {
    merge: {
      cartLines: MergeCartLine[];
      parentVariantId: string;
      price: {
        percentageDecrease: {
          value: number;
        };
      };
      title: string;
    };
  }[];
}
