export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your paking list🚀</em>
      </p>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packPercent = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packPercent === 100
          ? `You got everything! Ready to go✈️`
          : `👜You have ${numItems} items on your list, and you already packed ${packedItems}(${packPercent})%`}
      </em>
    </footer>
  );
}
