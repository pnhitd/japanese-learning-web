import PR1 from '../assets/PaidResources/PR1.png'
import PR2 from '../assets/PaidResources/PR2.png'
import PR3 from '../assets/PaidResources/PR3.png'
import PR4 from '../assets/PaidResources/PR4.png'
import PR5 from '../assets/PaidResources/PR5.png'
import PR6 from '../assets/PaidResources/PR6.png'
import PR7 from '../assets/PaidResources/PR7.png'
import PR8 from '../assets/PaidResources/PR8.png'
import PR9 from '../assets/PaidResources/PR8.png'
import PR10 from '../assets/PaidResources/PR10.png'

const  paidCoursesData = [
    {
        id: 1,
        title: 'N5 - Nhập môn',
        description: 'Khóa học dành cho người mới bắt đầu học tiếng Nhật, bao gồm bảng chữ cái, ngữ pháp và từ vựng cơ bản.',
        image: PR1,
        status: 'completed'
    },
    {
        id: 2,
        title: 'N4 - Giao tiếp',
        description: 'Học các mẫu câu giao tiếp và từ vựng cần thiết cho cuộc sống thường ngày, chuẩn bị nền tảng vững chắc.',
        image: PR2,
        progress: '45',
        status: 'in-progress',
    },
    {
        id: 3,
        title: 'N3 - Trung cấp',
        description: 'Khóa học tập trung vào việc nâng cao khả năng ngữ pháp và từ vựng để đọc hiểu các đoạn văn đơn giản.',
        image: PR3,
        status: 'not-learned'
    },
    {
        id: 4,
        title: 'N2 - Chuyên sâu',
        description: 'Tăng cường kỹ năng đọc hiểu và nghe hiểu các tài liệu phức tạp, phục vụ công việc và học thuật.',
        image: PR4,
        status: 'not-paid'
    },
    {
        id: 5,
        title: 'N1 - Thành thạo',
        description: 'Khóa học cao cấp giúp bạn làm chủ tiếng Nhật ở trình độ cao nhất, đọc hiểu văn bản học thuật và làm việc chuyên nghiệp.',
        image: PR5,
        status: 'not-paid'
    },
    {
        id: 6,
        title: 'Học Kanji từ N5 đến N1',
        description: 'Tổng hợp các bài học Kanji từ cơ bản đến nâng cao với mẹo ghi nhớ và thực hành hiệu quả.',
        image: PR6,
        status: 'not-paid'
    },
    {
        id: 7,
        title: 'Luyện thi JLPT N5-N4',
        description: 'Khóa học cung cấp các đề luyện thi, bài kiểm tra mô phỏng và mẹo làm bài cho kỳ thi JLPT N5 và N4.',
        image: PR7,
        status: 'not-paid'
    },
    {
        id: 8,
        title: 'Luyện thi JLPT N3-N2',
        description: 'Tăng cường kỹ năng làm bài thi và luyện tập các dạng đề khó, chuẩn bị cho kỳ thi JLPT N3 và N2.',
        image: PR8,
        status: 'not-paid'
    },
    {
        id: 9,
        title: 'Luyện thi JLPT N1',
        description: 'Khóa học dành riêng cho những ai đang chuẩn bị kỳ thi JLPT N1 với các tài liệu chuyên sâu.',
        image: PR9,
        status: 'not-paid'
    },
    {
        id: 10,
        title: 'Kỹ năng giao tiếp',
        description: 'Phát triển khả năng giao tiếp tự nhiên, phù hợp với các tình huống thực tế từ N5 đến N1.',
        image: PR10,
        status: 'not-paid'
    }
];

export default paidCoursesData;