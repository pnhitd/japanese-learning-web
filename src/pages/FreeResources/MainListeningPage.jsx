import React from "react";
import Lessons from "../../components/Lessons";
import vocab1 from "../../assets/lessons/vocab1.png";
import { Button, Flex } from "antd";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const MainListeningPage = () => {
  return (
    <div className="mx-10 my-6">
      <div className="flex">
        <div className="max-w-[70%]">
          <Link className="flex items-center mb-2" to="/free-resources">
            <AiOutlineArrowLeft />
            <p className="font-semibold text-lg ml-2">Quay lại</p>
          </Link>
          <img className="float-left mr-4" src={vocab1} alt="" />
          <div className="leading-6">
            <h1 className="font-bold text-3xl">Nghe hiểu</h1>
            <p className="mt-2 text-justify">
              Với phần phát âm, tốt nhất bạn nên chuẩn hoá ngay từ đầu, đừng bỏ
              qua vì nó khó hay nghĩ nó không quan trọng. Càng để lâu hay học
              lên cao bạn CỰC KÌ khó sửa đổi. Vì…… Từ vựng là điều bắt buộc
              chúng ta phải biết khi học bất cứ một ngôn ngữ nào trên thế giới.
              Không biết từ vựng, bạn không thể nói, cũng chẳng thể hiểu người
              khác nói gì. Nếu bạn biết nhiều từ vựng, kể cả khi ngữ pháp kém,
              bạn vẫn có thể diễn đạt cho người khác hiểu ý bạn mà muốn nói. Từ
              vựng chính là chìa khoá nắm giữ ý nghĩa câu từ bạn nói, tư tưởng
              của bạn, quan điểm của bạn. Chính vì thế, nếu các bạn đang có mong
              muốn chinh phục bất kể một loại ngôn ngữ nào mà vẫn còn ngại học
              từ mới, thì bạn nên từ bỏ đi, đó là điều điên rồ. Nói cách
              khác, TỪ VỰNG TIẾNG NHẬT đóng một vai trò quan trọng, là nền móng
              cho hệ thống ngôn ngữ của các bạn. Nền móng có vững chắc thì ngôi
              nhà mới vững chắc, vì thế từ vựng “không phải dạng vừa đâu” đúng
              không nào? Sau đó đến phần Kanji, Ngữ pháp nhé các bạn.
            </p>
          </div>
          <Flex className="justify-end mt-4 mb-10" gap="small" wrap>
          <Link to="/free-resources/vocab">
              <Button className="rounded-2xl px-8" type="primary">
                <p className="font-semibold">Học</p>
              </Button>
          </Link>
            <Button className="rounded-2xl px-8">
              <p className="font-semibold">PDF</p>
              <IoMdDownload className="w-3 h-3" />
            </Button>
          </Flex>
        </div>
        <div className="ml-10 mt-10">
          <Lessons />
        </div>
      </div>
    </div>
  );
};

export default MainListeningPage;
