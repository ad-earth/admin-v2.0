export interface IPostAdType {
  title: string;
}

export default function PostAdModal({ title }: IPostAdType) {
  return <div>{title}</div>;
}
