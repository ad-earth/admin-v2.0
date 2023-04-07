export interface PostAdType {
  title?: string;
}

export default function PostAdModal(props: PostAdType) {
  return <div>{props.title}</div>;
}
