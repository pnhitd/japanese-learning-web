import React from "react";
import HeaderBlog from "../../components/HeaderBlog";
import dt1 from "../../assets/articles/dt1.png";
import dt2 from "../../assets/articles/dt2.png";
import dt3 from "../../assets/articles/dt3.png";
import ava2 from "../../assets/avatars/ava2.png";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

const DetailArticlePage = () => {
  return (
    <div>
      <HeaderBlog />

      <div className="mx-[160px] mt-6 mb-10 border-2 rounded-2xl">
        <div className="flex">
          <Link
            to="/blog"
            className="text-[#F490AF] my-auto justify-start ml-4 flex"
          >
            <IoArrowBackSharp className="my-auto w-4 h-4" />
            <p className="ml-2 font-medium text-[18px]">Quay lại</p>
          </Link>
          <h1 className="mx-auto font-bold text-3xl my-6">
            Những khu phố du lịch nổi tiếng tại Nhật Bản
          </h1>
        </div>
        <img className="w-[100%]" src={dt1} alt="" />
        <div className="p-8">
          <button className="bg-[#F490AF] py-2 px-4 mb-4 rounded-md text-white font-medium">
            Đời sống
          </button>

          <div className="flex mb-4">
            <div className="flex">
              <img src={ava2} alt="" className="w-6 h-6 rounded-full" />
              <p className="ml-2 font-semibold text-gray-500">Naruto Uzumaki</p>
            </div>
            <div className="ml-6 text-gray-700">1 tháng 6, 2024</div>
          </div>

          <div className="leading-6 mb-4">
            Nhìn trên bản đồ thế giới, Nhật Bản trông có vẻ nhỏ bé, nhưng quốc
            gia này lại là nơi có vô số các thành phố đẳng cấp thế giới, các địa
            danh ngoạn mục và khung cảnh thiên nhiên tuyệt đẹp. Dưới đây là 11
            thành phố đẹp nhất bạn nhất định phải ghé qua khi đến Nhật Bản.
          </div>
          <h2 className="font-bold text-2xl">1. Tokyo</h2>
        </div>

        <img src={dt2} alt="" />
        <div className="px-8 py-6">
          <div className="leading-6 mb-4">
            Tokyo là thủ đô của Nhật Bản và là thành phố được ghé thăm nhiều
            nhất tại xứ sở mặt trời mọc. Tokyo sở hữu rất nhiều địa danh tham
            quan nổi tiếng, từ các ngôi đền cổ, các khu vườn lịch sử, các kiệt
            tác kiến trúc đến các trung tâm mua sắm đẳng cấp thế giới, cuộc sống
            về đêm và ẩm thực đa dạng, phong phú... Hơn hết, Tokyo nổi tiếng
            nhất với các khu mua sắm và kiến trúc hiện đại, là một trong những
            nơi du khách nhất định phải ghé thăm khi đến Nhật Bản. Tuy nhiên,
            điều quan trọng nhất là bạn đừng bỏ qua những điều nhỏ nhặt như việc
            bạn có thể ghé thăm và khám phá - từ những công viên yên tĩnh đến
            những quán cà phê nhỏ nhắn và thú vị. Một nơi thú vị để ghé thăm ở
            Tokyo là Neko JaLaLa, một quán cà phê theo chủ đề mèo mà bạn chưa
            từng thấy trước đây. Các quán cà phê mèo ở khắp Nhật Bản đã đạt được
            những nhận xét rất tích cực cho khung cảnh khác thường của họ, nhưng
            JaLaLa mang đến cơ hội uống cà phê và chơi với các giống mèo kỳ lạ
            và rất được yêu thích. Nếu là 1 tín đồ yêu mèo thì không nên bỏ qua
            nhé. JaLaLa nằm ở Akihabara, vì vậy nếu bạn đang tìm kiếm nhiều thứ
            để làm ở Nhật Bản, thì con phố này may mắn có rất nhiều cửa hàng và
            quán cà phê theo chủ đề như quán cà phê hầu gái. Một chuyến đi đến
            Tháp Tokyo cung cấp một cái nhìn toàn cảnh thành phố Tokyo nhất là
            vào ban đêm là một trải nghiệm thú vị. Tòa tháp sáng lên đẹp đẽ và
            sang trọng suốt đêm, đó cũng là một điểm nhấn đẹp, hứa hẹn sẽ cho ra
            đời những bức ảnh hoàn hảo. Nếu bạn đang tìm kiếm một điểm thu hút
            ít thương mại và văn hóa Nhật Bản nằm ở Tokyo, thì ngôi chùa Phật
            giáo Kaneji là một điểm đến lý tưởng. Hoàn thiện với những khu vườn,
            hành lang và tượng được thiết kế phức tạp, ngôi đền này rất lý tưởng
            cho bất cứ ai muốn tận hưởng thời gian thư giãn khi ở Tokyo.
          </div>
          <h2 className="font-bold text-2xl">2. Osaka</h2>
        </div>

        <img src={dt3} alt="" />
        <div className="px-8 py-6">
          <div className="leading-6 mb-4">
            Osaka nổi tiếng với người dân địa phương thân thiện, các món ăn ngon
            và phương ngữ Kansai quyến rũ. Thành phố là nơi đẹp nhất bạn nên ghé
            thăm, đặc biệt là vào buổi tối với những ánh đèn neon và các quán ăn
            khuya phục vụ các món ăn ngon nức tiếng. Nơi đây có rất nhiều nhà
            hàng, cửa hàng thời trang, và các bảng hiệu neon phát sáng. Osaka là
            một thành phố cảng có rất nhiều bảo tàng,công viên giải trì, điểm
            tham quan thú vị và nhiều hoạt động hấp dẫn cho bất kỳ du khách nào
            đến Nhật Bản. Đường phố Osaka bao gồm các cửa hàng độc đáo và thực
            phẩm địa phương giúp mang lại cảm giác văn hóa sâu sắc hơn, đặc biệt
            là các đồ dùng bạn chỉ có thể tìm thấy ở Nhật Bản. Để tận hưởng và
            thưởng thức trọn vẹn thành phố này là trải nghiệm qua các điểm tham
            quan nổi bật nhất. Cho dù đó là Lâu đài Osaka cổ điển hay một công
            viên giải trí vui nhộn như Universal Studios Japan, Osaka thực sự
            dường như có tất cả.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailArticlePage;
