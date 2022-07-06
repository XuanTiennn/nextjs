import { useRouter } from 'next/router';
import * as React from 'react';

export interface IPostDetailProps {
}

export default function PostDetail (props: IPostDetailProps) {
    const match=useRouter();
    console.log(match);
  return (
    <div>
      detail
    </div>
  );
}
