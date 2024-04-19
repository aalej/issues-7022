export default function DynamicMenu({ items }) {
  return (
    <nav>
      {items.map((item) => (
        <a key={item.key} href={item.href}>
          {item.title}
        </a>
      ))}
    </nav>
  );
}
