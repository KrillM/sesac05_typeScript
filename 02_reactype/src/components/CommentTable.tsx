import CommentTr from "./CommentTr ";
import { CommentRow } from "./types/types";

interface Props {
    comment: CommentRow[];
    test?: string;
}

// react which use with typescript simultaneously, props also declare type
export default function CommentTable({comment}: Props) {
    return(<>
    <table border={1} style={{ marginTop: '30px', width: '500px' }}>
        <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
            </tr>
        </thead>
        <tbody>
            {comment.map((value, idx) => {
                return (
                    <CommentTr key={idx + 1} comment={value} idx={idx}/>
                )
            })}
        </tbody>
      </table>
    </>)
}