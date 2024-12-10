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
    },
    {
        id: 11,
        title: 'Ngữ pháp căn bản',
        description: 'Học các nguyên tắc ngữ pháp cơ bản của tiếng Nhật, giúp bạn nắm vững nền tảng cần thiết.',
        image: FR1,
        status: 'completed'
    },
    {
        id: 12,
        title: 'Luyện viết cơ bản',
        description: 'Tập viết bảng chữ cái và các câu đơn giản, giúp bạn làm quen với cách viết tiếng Nhật.',
        image: FR2,
        status: 'completed'
    },
    {
        id: 13,
        title: 'Nghe hiểu cơ bản',
        description: 'Khóa học giúp bạn làm quen với các đoạn hội thoại đơn giản và nghe hiểu hiệu quả.',
        image: FR3,
        status: 'completed'
    },
    {
        id: 14,
        title: 'Từ vựng N4',
        description: 'Tổng hợp và luyện tập các từ vựng cần thiết cho kỳ thi N4 với ví dụ và bài tập thực hành.',
        image: FR4,
        progress: '60',
        status: 'in-progress'
    },
    {
        id: 15,
        title: 'Ngữ pháp N4',
        description: 'Nâng cao khả năng sử dụng ngữ pháp với các bài tập thực tế và ví dụ chi tiết.',
        image: FR5,
        progress: '50',
        status: 'in-progress'
    },
    {
        id: 16,
        title: 'Học Kanji N4',
        description: 'Tiếp cận các Kanji cơ bản và trung cấp, giúp bạn đọc hiểu văn bản đơn giản.',
        image: FR6,
        progress: '40',
        status: 'in-progress'
    },
    {
        id: 17,
        title: 'Luyện nghe N3',
        description: 'Cải thiện kỹ năng nghe hiểu các đoạn hội thoại và bài phát biểu ở cấp độ N3.',
        image: FR7,
        progress: '10',
        status: 'in-progress'
    },
    {
        id: 18,
        title: 'Kỹ năng đọc hiểu N3',
        description: 'Luyện đọc hiểu các đoạn văn có cấu trúc phức tạp hơn và tăng tốc độ xử lý thông tin.',
        image: FR8,
        status: 'not-learned'
    },
    {
        id: 19,
        title: 'Học Kanji N3',
        description: 'Nâng cao vốn Kanji trung cấp với các mẹo ghi nhớ và bài tập luyện tập.',
        image: FR9,
        status: 'not-learned'
    },
    {
        id: 20,
        title: 'Luyện viết N3',
        description: 'Phát triển khả năng viết văn bản tiếng Nhật trung cấp, từ thư từ đến bài luận.',
        image: FR10,
        status: 'completed'
    }
    
];

export default coursesData;