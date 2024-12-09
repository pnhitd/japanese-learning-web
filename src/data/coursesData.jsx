import course1 from '../assets/OnlineCourses/OC2.png';
import FR1 from '../assets/FreeResources/FR1.png'
import FR2 from '../assets/FreeResources/FR2.png'
import FR3 from '../assets/FreeResources/FR3.png'
import FR4 from '../assets/FreeResources/FR4.png'
import FR5 from '../assets/FreeResources/FR5.png'
import FR6 from '../assets/FreeResources/FR6.png'
import FR7 from '../assets/FreeResources/FR7.png'
import FR8 from '../assets/FreeResources/FR8.png'
import FR9 from '../assets/FreeResources/FR9.png'
import FR10 from '../assets/FreeResources/FR10.png'

const coursesData = [
    {
        id: 1,
        title: 'N5 - Nhập môn',
        description: 'Khóa học dành cho người mới bắt đầu học tiếng Nhật, bao gồm bảng chữ cái, ngữ pháp và từ vựng cơ bản.',
        image: FR1,
        status: 'completed'
    },
    {
        id: 2,
        title: 'N4 - Giao tiếp',
        description: 'Học các mẫu câu giao tiếp và từ vựng cần thiết cho cuộc sống thường ngày, chuẩn bị nền tảng vững chắc.',
        image: FR2,
        progress: '45',
        status: 'in-progress',
    },
    {
        id: 3,
        title: 'N3 - Trung cấp',
        description: 'Khóa học tập trung vào việc nâng cao khả năng ngữ pháp và từ vựng để đọc hiểu các đoạn văn đơn giản.',
        image: FR3,
        status: 'not-learned'
    },
    {
        id: 4,
        title: 'N2 - Chuyên sâu',
        description: 'Tăng cường kỹ năng đọc hiểu và nghe hiểu các tài liệu phức tạp, phục vụ công việc và học thuật.',
        image: FR4,
        status: 'not-learned'
    },
    {
        id: 5,
        title: 'N1 - Thành thạo',
        description: 'Khóa học cao cấp giúp bạn làm chủ tiếng Nhật ở trình độ cao nhất, đọc hiểu văn bản học thuật và làm việc chuyên nghiệp.',
        image: FR5,
        status: 'not-learned'
    },
    {
        id: 6,
        title: 'Học Kanji từ N5 đến N1',
        description: 'Tổng hợp các bài học Kanji từ cơ bản đến nâng cao với mẹo ghi nhớ và thực hành hiệu quả.',
        image: FR6,
        status: 'not-learned'
    },
    {
        id: 7,
        title: 'Luyện thi JLPT N5-N4',
        description: 'Khóa học cung cấp các đề luyện thi, bài kiểm tra mô phỏng và mẹo làm bài cho kỳ thi JLPT N5 và N4.',
        image: FR7,
        status: 'not-learned'
    },
    {
        id: 8,
        title: 'Luyện thi JLPT N3-N2',
        description: 'Tăng cường kỹ năng làm bài thi và luyện tập các dạng đề khó, chuẩn bị cho kỳ thi JLPT N3 và N2.',
        image: FR8,
        status: 'not-learned'
    },
    {
        id: 9,
        title: 'Luyện thi JLPT N1',
        description: 'Khóa học dành riêng cho những ai đang chuẩn bị kỳ thi JLPT N1 với các tài liệu chuyên sâu.',
        image: FR9,
        status: 'not-learned'
    },
    {
        id: 10,
        title: 'Kỹ năng giao tiếp',
        description: 'Phát triển khả năng giao tiếp tự nhiên, phù hợp với các tình huống thực tế từ N5 đến N1.',
        image: FR10,
        status: 'not-learned'
    }
];

export default coursesData;