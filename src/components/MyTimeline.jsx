import React from 'react';

const data = [
  {
    title: 'Buổi 1: Giới thiệu về văn hóa và giao tiếp công sở Nhật Bản',
    items: [
      'Giới thiệu văn hóa giao tiếp công sở tại Nhật Bản',
      'Các quy tắc ứng xử trong môi trường công sở',
      'Cách thức giao tiếp với cấp trên, đồng nghiệp và khách hàng',
    ],
  },
  {
    title: 'Buổi 2: Từ vựng và mẫu câu cơ bản trong công sở',
    items: [
      'Từ vựng cơ bản liên quan đến công việc: email, cuộc họp, báo cáo, dự án',
      'Các mẫu câu cơ bản để chào hỏi, giới thiệu, xin phép và thể hiện sự tôn trọng',
      'Thực hành giao tiếp qua điện thoại và email trong công sở',
    ],
  },
  {
    title: 'Buổi 3: Giao tiếp trong các cuộc họp và báo cáo công việc',
    items: [
      'Cách chuẩn bị và tham gia vào các cuộc họp: từ việc mở đầu đến kết luận',
      'Cách đặt câu hỏi và trả lời trong các cuộc họp',
      'Mẫu câu báo cáo tình hình công việc và cập nhật tiến độ',
    ],
  },
  {
    title: 'Buổi 4: Làm việc với khách hàng và đối tác',
    items: [
      'Cách chào hỏi và lịch sự với khách hàng',
      'Mẫu câu đàm phán và thảo luận hợp đồng với khách hàng',
      'Cách giới thiệu công ty, sản phẩm và dịch vụ một cách chuyên nghiệp',
    ],
  },
  {
    title: 'Buổi 5: Xử lý tình huống và giải quyết vấn đề trong công việc',
    items: [
      'Các tình huống giải quyết vấn đề thường gặp trong công sở: xử lý khủng hoảng, yêu cầu công việc, và sự cố trong nhóm.',
      'Cách xin lỗi và thỏa thuận giải quyết vấn đề',
      'Thực hành xử lý tình huống giao tiếp khó khăn trong công việc',
    ],
  },
  {
    title: 'Buổi 6:Tổng kết và thực hành giao tiếp trong công sở',
    items: [
      'Tổng kết những kiến thức đã học trong khóa học',
      'Thực hành giao tiếp trong các tình huống mô phỏng công sở',
      'Phản hồi và cải thiện các kỹ năng giao tiếp',
    ],
  },
];

const MyTimeline = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="px-6">
        {data.map((session, index) => (
          <div
            key={index}
            className={`mb-6 border-l-4 pl-4 ${
              index % 2 === 0 ? 'border-green-500' : 'border-blue-500'
            }`}
          >
            <h2 className="text-xl font-bold text-[#2B308B] mb-3">
              {session.title}
            </h2>
            <ul className="list-disc space-y-2 pl-6 text-base">
              {session.items.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyTimeline;