type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends Partial<AllType>, U extends Partial<AllType>>(
  top: T,
  bottom: U
): AllType {
  return {
    name: top.name as string,
    color: top.color as string,
    position: bottom.position as number,
    weight: bottom.weight as number,
  };
}
