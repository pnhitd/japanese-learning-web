import React, { useState } from "react";
import thieu from "../assets/avatars/thieu.png"
import nhi from "../assets/avatars/nhi.png"
import quynh from "../assets/avatars/quynh.png"
import tho from "../assets/avatars/tho.png"
import truong from "../assets/avatars/truong.png"

const CommentSection = () => {
  // State lưu trữ danh sách bình luận
  const [comments, setComments] = useState([
    {
      id: 1,
      avatar: nhi,
      name: "Thiện Nhi",
      role: "Người mua khóa học",
      time: "1 ngày trước",
      content:
        "Quá là tuyệt vời luôn ak cả nhà iu của kem ơi. Khóa học giúp cho kem biết thêm nhiều từ vựng và ngữ pháp bổ ích. Sắp tới Kem sẽ thi JLPT N3 vào tháng 7 nên trang web này là top 1 được ghé thăm mỗi ngày của kem đó cả nhà :>",
      replies: 2,
    },
    {
      id: 2,
      avatar: quynh,
      name: "Phương Quỳnh",
      role: "Người mua khóa học",
      time: "1 ngày trước",
      content:
        "Quao thật là một khóa học vô cùng tuyệt vời. Đã lâu lắm rồi mình chưa được học một khóa học nào đậm tính học thuật như thế này. Mình thật sự vui sướng, hạnh phúc. Mình xin cảm ơn các tổ chức, cơ quan ban ngành, đoàn thể đã xây dựng trang web này để mình được ngồi đây học khóa học này.",
      replies: 0,
    },
    {
      id: 3,
      avatar: thieu,
      name: "Văn Thiệu",
      role: "Người mua khóa học",
      time: "2 ngày trước",
      content:
        "Tạm biệt Du*lingo, khóc xong rồi thì mình cất gọn poster app vào góc, mình tạm thời không học cùng nhau nữa Du*lingo nhé. Tạm biệt app, cho mình ích kỷ lần này nhé. Hẹn gặp lại khi mình đã học xong những khóa học bổ ích này trên website Sakura, mình không quay lưng đi nhưng mình sẽ dừng lại và chọn khóa học ở đây.",
      replies: 0,
    },
    {
      id: 4,
      avatar: tho,
      name: "Anh Thơ",
      role: "Người mua khóa học",
      time: "5 ngày trước",
      content:
        "Biết ơn những khóa học, trân trọng những bạn đã tạo ra trang web này. Cảm ơn quá khứ, hiện tại, tương lai, mong trang web  này tồn tại mãi mãi, yeah I feel blessed.",
      replies: 9,
    },
  ]);

  // State lưu trữ nội dung comment mới
  const [newComment, setNewComment] = useState("");

  // Hàm thêm bình luận mới
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          avatar: truong,
          name: "Trần Nhật Trường",
          role: "Người mua khóa học",
          time: "Vừa xong",
          content: newComment,
          replies: 0,
        },
      ]);
      setNewComment(""); // Reset input
    }
  };

  return (
    <div className="px-10">
      <div>
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="m-10 rounded-xl bg-white  p-5 flex flex-col"
          >
            <div className="flex items-center">
              <img src={comment.avatar} alt="avatar" />
              <div className="ml-3 text-base font-semibold">{comment.name}</div>
              <div className="ml-3 text-xs px-3 py-1 bg-[#2B308B] text-white rounded-lg">
                {comment.role}
              </div>
              <div className="ml-auto text-sm text-gray-500">{comment.time}</div>
            </div>
            <p className="text-left mt-2 text-base text-gray-700">{comment.content}</p>
            <div className="mt-2 flex items-center text-blue-500">
              <button className="text-sm">Trả lời</button>
              {comment.replies > 0 && (
                <span className="ml-2 text-sm text-gray-500">
                  {comment.replies} phản hồi
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Form thêm bình luận */}
      <div className="px-10">
        <textarea
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 text-base focus:outline-none"
          rows="3"
          placeholder="Viết đánh giá dưới tên Trần Nhật Trường"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          onClick={handleAddComment}
          className="flex mt-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-[#2B308B]"
        >
          Gửi đánh giá
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
