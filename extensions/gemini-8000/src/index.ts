export function run({ cart }: { cart: Cart }): MergeOperation {
  const mergeCartLines: MergeCartLine[] = [];
  let parentVariantId: string = "";

  for (const [index, line] of cart.lines.entries()) {
    if (line.merchandise.product.hasAnyTag) {
      if (index === 0) {
        const parentLine = { ...line };
        parentVariantId = parentLine.merchandise.id;
      }

      mergeCartLines.push({
        cartLineId: line.id,
        quantity: line.quantity,
      });
    }
  }

  if (parentVariantId !== "") {
    return {
      operations: [
        {
          merge: {
            cartLines: mergeCartLines,
            parentVariantId,
            price: {
              percentageDecrease: {
                value: 10,
              },
            },
            title: "Super Kit",
          },
        },
      ],
    };
  }

  return {
    operations: []
  }
}
