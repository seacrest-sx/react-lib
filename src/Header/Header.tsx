import { HeaderProps } from "../lib";

export function Header({foo}: HeaderProps) {
  return <>
    <h2>{foo}</h2>
    <div>Foo</div>
  </>
}
