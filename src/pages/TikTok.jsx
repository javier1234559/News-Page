import React from "react";
import styles from "../tailwind-styles";
import {
  Contents,
  Title,
  Heading,
  SubHeading,
  Notes,
  Paragragh,
  Image,
  List,
  MultipleList,
} from "../components";

import {
  imageTitle,
  imageContent1,
  imageContent2,
  imageContent3,
  imageContent4,
  imageContent5,
  imageContent6,
  imageContent7,
  imageContent8,
  imageContent9,
  imageContent10,
  imageContent11,
  imageContent12,
  imageContent13,
  imageContent14,
  imageContent15,
  imageContent16,
  imageContent17,
  imageContent18,
  imageContent19,
  imageContent20,
  imageContent21,
} from "../assets/tiktok-img";
import { contentTiktoks } from "../constants/data.js";

const TikTok = () => {
  return (
    <div className={`${styles.wrapper} `}>
      <div className={`${styles.container} `}>
        <Image src={imageTitle} customclass={" !w-[100%]"} />
        <Title>HƯỚNG DẪN SỬ DỤNG TIKTOK</Title>
        <Contents contents={contentTiktoks} color={"text-gradient-tiktok"} />
        <div id="1">
          <Heading customclass={"mt-10 mb-4"}>LỜI NÓI ĐẦU</Heading>
          <SubHeading customclass={"text-[25px]"}>
            Ngày nay, các ứng dụng mạng xã hội, ứng dụng giải trí như Facebook,
            Youtube, đang được phát triển mạnh mẽ tại Việt Nam. Song, người dùng
            lại khá mơ hồ và không hiểu hết được những hữu ích mà mỗi ứng dụng
            mang đến. Du nhập vào Việt Nam trong những năm gần đây, Tiktok ghi
            tên mình vào một trong những ứng dụng được yêu thích nhất. Vậy Tik
            Tok là gì? Cẩm nang này sẽ giới thiệu cho chúng ta biết tiktok và
            cách sử dụng.
          </SubHeading>
        </div>

        <div id="2">
          <Heading>I.GIỚI THIỆU VỀ TIKTOK</Heading>
          <div id="21">
            <SubHeading customclass={"mb-0"}>
              1. Giới thiệu khái quát
            </SubHeading>
            <Paragragh>
              <span className="text-gradient-tiktok">Tik Tok</span> là gì? Tik
              Tok là của nước nào?
            </Paragragh>
            <MultipleList>
              <List customclass={" md:list-disc"}>
                Nổi bật với hàng loạt video ngắn trendy về thời trang, phong
                cách sống, nấu ăn,... Kênh Tiktok dường như đã trở thành một
                trong những ứng dụng được giới trẻ yêu thích, vậy Tik Tok là gì?
                Về bản chất, Tik Tok là một trong những mạng xã hội đang “làm
                mưa, làm gió” không chỉ tại Việt Nam mà còn trên khắp thế giới.
                Tik Tok có tên gốc là Douyin hay Vibrato và được phát triển tại
                Trung Quốc
              </List>
              <List customclass={"md:list-disc"}>
                Ứng dụng Tik Tok chính là nơi bạn có thể đăng tải các video ngắn
                từ vài giây lên đến vài phút. Đáng chú ý đây là nơi đây có thể
                bắt gặp các “idol” của mình một cách thường xuyên thông qua các
                video hóm hỉnh. Khả năng chỉnh sửa, quay video, cùng kho tàng âm
                nhạc “siêu cấp” đã mang đến điểm khác biệt cho Tik Tok. Đặc
                biệt, ứng dụng Tik Tok còn có khả năng cá nhân hóa, điều này có
                nghĩa là mỗi cá nhân sẽ được những tính năng khác nhau, đây được
                xem là điểm cộng và làm cho Tik Tok trở nên hấp dẫn với toàn thế
                giới.
              </List>
            </MultipleList>
          </div>
          <div id="22">
            <SubHeading customclass={"mt-8 mb-0"}>2. Tính Năng</SubHeading>
            <MultipleList>
              <List customclass={"title-list"}>
                1. Tính năng chính của Tik Tok: Tạo hiệu ứng cho camera
              </List>
              <Paragragh>
                Đây là công đoạn căn bản cũng như tính năng trên Tik Tok được
                dùng nhiều nhất. Có đến cả trăm hiệu ứng cho bạn lựa chọn.
              </Paragragh>
              <Paragragh>
                {" "}
                <span className="bold">Bước 1</span>: Việc trước tiên mà bạn cần
                làm là kích hoạt chế độ tạo video. Tại đây có phần tạo các hiệu
                ứng. Nhưng bạn cũng đừng bao giờ quên cả phần chọn bộ lọc. Cũng
                giống như chọn âm thành ở bên phải.
              </Paragragh>
              <Paragragh>
                <span className="bold">Bước 2</span>: Ở đây có rất nhiều các
                hiệu ứng đã được tải và chưa được tải. Nếu như chưa được tải thì
                chỉ phải click vào để tải trong vài giây là sử dụng. 1 Số hiệu
                ứng sẽ tự động nhận diện khuôn mặt. Vì vậy nếu không phải mặt
                người sẽ không hiện ra. Có rất nhiều hình cute, dễ thương thường
                được dùng vào thời điểm hiện tại. Như hình Comic hoặc hình dạng
                led, để lựa chọn chỉ cần bấm vào là được.
              </Paragragh>
              <List customclass={" title-list"}>
                2. Tính năng chính của Tik Tok: Kho nhạc khổng lồ
              </List>
              <Paragragh>
                Một khi tiến hành chọn hiệu ứng thì một phần không kém trọng
                yếu. Chính là chọn các bản nhạc nền, có rất nhiều bản nhạc từ
                Việt Nam cho đến Quốc tế. Đều có trong này mà bạn sẽ sử dụng
                được. Độ dài của một video rơi vào khoảng 30 giây. Do đó bạn đọc
                cũng không được chọn lựa những bài quá dài hoặc quá ngắn nhé.
              </Paragragh>
              <Paragragh>
                Với TikTok, bạn có thể thông minh video với hàng triệu bài hát
                đặc sắc. Cùng với đấy là nhiều bản nhạc cực kì độc đáo chỉ dành
                riêng cho ứng dụng mà bạn không thể tìm ở bất kì đâu.{" "}
              </Paragragh>
              <List customclass={"title-list"}>
                3. Hiệu ứng cực chất cho video
              </List>
              <Image src={imageContent1} />
              <Paragragh>
                TikTok tích hợp sẵn rất nhiều những hiệu ứng được tạo sẵn từ nhà
                phát hành. Giúp cho bạn làm ra các video cực chất một cách đơn
                giản. Mà không tốn quá là nhiều thời gian để sử dụng.
              </Paragragh>

              <List customclass={"title-list"}>
                4. Tính năng chính của Tik Tok: Nhiều bộ lọc màu
              </List>
              <Paragragh>
                TikTok mạnh mẽ nhờ vào các bộ lọc màu được dùng cho clip. Bạn có
                thể thay đổi nhiều hiệu ứng sắc màu khác nhau trên video. Giúp
                cho bạn đơn giản làm ra những video đẹp và không gây nhàm chán
              </Paragragh>
              <List customclass={"title-list"}>
                5. Tính năng chính của Tik Tok: Tạo bộ lọc cho ảnh
              </List>
              <Paragragh>
                Công cụ này chúng tôi có nhắc ở phần thứ nhất. Ngoài việc chọn
                lựa hiệu ứng cho video thì chọn màu cho ảnh trong clip cũng khá
                quan trọng. Nó làm thay đổi hẳn tông màu nhưng tất nhiên vẫn còn
                theo sự thùy chỉnh của bạn. Tính năng trên Tik Tok này không
                những phổ biến. Mà nó còn được rất nhiều các phần mềm khác làm
              </Paragragh>
              <List customclass={"title-list"}>6. Tiến hành xuất video</List>
              <Paragragh>
                Một khi trải nghiệm xong các tính năng trên Tik Tok được dùng
                nhiều nhất trên. Thì công việc cuối cùng chính là xuất video đó.
                Đăng video đấy lên trên internet của Tik Tok. Để người xem có
                thể tương tác với bạn được ngay tức thì
              </Paragragh>
              <Paragragh>
                Ở trên Tiktok họ luôn cập nhập những tĩnh năng mới hằng ngày đây
                là cách sử dụng các tính năng mới trên tik tok
              </Paragragh>
              <Paragragh>
                <span className="bold">Bước 1</span>: Chọn dấu ( + ) ngay phía
                dưới của giao diện chính trong tik tok.
              </Paragragh>
              <Image src={imageContent2} />
              <Paragragh>
                Bạn chọn bài hát cần ghép vào video. Phía dưới sẽ có những gợi ý
                về ca khúc đang thịnh hành. Ngoài ra, bạn sẽ chọn những ca khúc
                đã có sẵn trong điện thoại ở mục m thanh của tôi. Sau đó bạn
                nhấn Quay với âm thanh này.
              </Paragragh>
              <Paragragh>
                <span className="bold">Bước 2</span>: Lúc này tik tok sẽ chuyển
                sang bố cụ và giao diện có những công cụ sau để bạn chọn cho
                clip của mình
              </Paragragh>
              <Paragragh>
                <span className="bold">Bước 3</span>: Khi đã chỉnh xong, bạn
                nhấn vào Chạm để quay hoặc Giữ để quay để thực hiện quay video.
              </Paragragh>
              <Paragragh>
                Sau khi hoàn tất bạn nhấn kế tiếp, đặt tên cho video. Và chia sẻ
                lên kênh mạng xã hội như Youtube, kênh Facebook,… Hoặc lưu vào
                máy để nhìn lại.
              </Paragragh>
            </MultipleList>
          </div>
        </div>

        <div id="3">
          <Heading customclass={"pt-4"}>II. CÁCH CÀI ĐẶT VÀ TRUY CẬP</Heading>
          <div id="31">
            <Heading>1. Cách sử dụng tiktok trên điện thoại</Heading>
            <List customclass={"title-list"}> 1.Tải ứng dụng và đăng ký </List>
            <Paragragh>
              Truy cập App store hoặc google play đăng ký ngay lập tức với
              Fb,Gmail hoặ twitter hoạc thêm tên người dùng và mật khâu tiêu
              chuẩn nếu bạn không muốn bất kỳ tài khoản nào kết nối
            </Paragragh>
            <List customclass={"title-list"}>2.Thiết lập hồ sơ của bạn</List>
            <Paragragh>
              {" "}
              Khi bạn đã đăng nhập, bạn sẽ ngay lập tức được đưa vào nguồn cấp
              dữ liệu video.Chạm vào biểu tượng ở phía dưới bên phải trông giống
              như phác thảo của mọt người để xem và điều chỉnh hồ sơ của bạn{" "}
            </Paragragh>
            <Paragragh>
              Khi bạn nhập hồ sơ của mình, hãy nhấn nút Chỉnh hồ sơ, sauddos
              chọn ảnh hoặc video hồ sơ. Bạn nên thêm tên người dùng và thông
              tin sinh học của bạn . Nếu muốn khoe các hồ sơ truyền thông xã hội
              khác cuarminhf,bạn có thể liên kết các trang youtube và instagram
              của mình. Nếu bạn là doanh nghiệp, đây có thể là 1 cách hữu ích để
              quảng cáo các nền tảng hình ảnh khác của bạn{" "}
            </Paragragh>
            <List customclass={"title-list"}>
              3. Cách sử dụng các tính năng chính Tik Tok
            </List>
            <List customclass={"title-list"}>
              3.1 Cách lướt xem video trên Tik Tok
            </List>
            <Paragragh>
              Lần đầu tiên truy cập tik tok sau khi tải về, bạn sẽ thấy giao
              diện như hình dưới.
            </Paragragh>
            <Paragragh>
              <span className="text-gradient-tiktok">
                {" "}
                Cách lướt xem video tiếp theo trên Tik Tok
              </span>
            </Paragragh>
            <Paragragh>
              Về cơ bản, cách dùng Tik Tok cũng giống như Facebook. Nếu lướt
              Facebook, bạn sẽ kéo xuống để xem status bạn bè, nếu dùng Tik Tok,
              bạn chỉ cần vuốt xuống để xem video tiếp theo.
            </Paragragh>
            <Paragragh>
              Nhưng Tik Tok sẽ có 2 mục phát video:{" "}
              <span className="text-gradient-tiktok">Mục Đang Follow</span> và{" "}
              <span className="text-gradient-tiktok">Dành Cho Bạn</span>.
            </Paragragh>
            <Paragragh>
              <span className="text-gradient-tiktok">Mục Dành Cho Bạn</span>
            </Paragragh>
            <Paragragh>
              Tik Tok sẽ tự động chọn lọc tất cả những video mà họ nghĩ rằng phù
              hợp với sở thích.
            </Paragragh>
            <Paragragh>
              <span className="text-gradient-tiktok">Mục Đang Follow</span>
            </Paragragh>
            <Paragragh>
              Nếu muốn xem video mới từ những người bạn đã bấm theo dõi, hãy
              nhấp vào tùy chọn Đang Follow, bên cạnh tab Dành Cho Bạn.
            </Paragragh>
            <Paragragh>
              Nếu bạn chưa bấm Follow ai, hoặc người bạn follow không cập nhật
              video mới, danh sách video ở mục Đang Follow sẽ trống.
            </Paragragh>
            <Image src={imageContent3} />
            <List customclass={"title-list"}>
              3.2 Cách Like, comment hoặc share Video trên Tik Tok
            </List>
            <Paragragh>
              Nếu bạn yêu thích một video bất kỳ, hãy bấm vào biểu tượng trái
              tim để thả tim (Tương đương nút Like Facebook).
            </Paragragh>
            <List customclass={"title-list"}></List>
            <Paragragh>
              Để lại comment bằng cách sử dụng biểu tượng comment video Tik Tok.
            </Paragragh>
            <Paragragh>
              Bấm vào biểu tượng dấu ba chấm Chia Sẻ, bạn sẽ được hiển thị giao
              diện chia sẻ video qua Messenger, Facebook, Zalo hoặc SMS…
            </Paragragh>
            <Paragragh>
              Bạn cũng có thể bấm lưu video về máy để xem lại mà không cần kết
              nối Internet.
            </Paragragh>
            <Image src={imageContent4} />
            <List customclass={"title-list"}>
              3.3 Cách bấm theo dõi (Follow) chủ sở hữu video
            </List>
            <Paragragh>
              Nếu bạn xem một video bất kì và muốn theo dõi chủ sở hữu video,
              hãy bấm vào biểu tượng avatar có biểu tượng dấu cộng màu hồng như
              hình dưới.
            </Paragragh>
            <Paragragh>
              Bạn sẽ được chuyển hướng về tài khoản đã đăng video và xem được
              tất cả thông tin tài khoản và danh sách video họ đã đăng trên Tik
              Tok.
            </Paragragh>
            <Paragragh>
              Hãy bấm vào nút Follow để cập nhật những video mới nhất.
            </Paragragh>
            <Image src={imageContent5} />
            <List customclass={"title-list"}>
              4. Cách tìm video hoặc người dùng trên Tik Tok
            </List>
            <Paragragh>
              Nếu muốn tìm một video hoặc người dùng bất kỳ trên Tik Tok, bạn sẽ
              sử dụng tùy chọn Khám Phá Tik Tok.
            </Paragragh>
            <Paragragh>
              Nhập ID người dùng hoặc tên video bạn muốn kiếm vào ô tìm kiếm.
            </Paragragh>
            <List customclass={"title-list"}>
              5. Cách sử dụng Tik Tok để quay video
            </List>
            <List customclass={"title-list"}>
              5.1 Những thứ cần chuẩn bị để quay video Tik Tok
            </List>
            <Paragragh>
              Nếu muốn sử dụng tính năng quay hoặc upload video lên Tik Tok,
              trước tiên bạn phải{" "}
              <a
                href="https://www.tiktok.com/login"
                className="text-gradient-tiktok font-semibold"
              >
                đăng nhập Tik Tok
              </a>
              .
            </Paragragh>

            <Paragragh>
              Tiếp theo, bạn nên cập nhật một số trend Tik Tok mới bằng cách cập
              nhật Hashtag Challenge.
            </Paragragh>
            <Paragragh>
              Những video cập nhật theo hashtag challenge thường hút nhiều view
              hơn hẳn, vì vậy trừ khi đã có thương hiệu riêng ở những kênh khác,
              nếu không, bạn nên lấy chủ đề từ hashtag challenge.
            </Paragragh>
            <List customclass={"title-list"}>
              5.2 Cách truy cập tính năng quay video Tik Tok
            </List>
            <Paragragh>
              <span className="text-gradient-tiktok">
                Bạn chỉ cần thực hiện những bước sau để dùng tính năng quay
                video Tik Tok:
              </span>
            </Paragragh>
            <MultipleList>
              <List customclass={"md:list-disc"}>
                Mở ứng dụng Tik Tok trên điện thoại & đăng nhập tài khoản Tik
                Tok
              </List>
              <List customclass={"md:list-disc"}>
                Bấm vào dấu cộng ở giữa như hình dưới
              </List>
              <List customclass={"md:list-disc"}>
                Tik Tok yêu cầu quyền truy cập camera, hãy xác nhận cho phép.
              </List>
              <List customclass={"md:list-disc"}>
                Sau cùng, bạn được chuyển hướng về giao diện quay video Tik Tok.
              </List>
              <List customclass={"md:list-disc"}>
                Cách quay hoàn toàn tương tự như trên điện thoại, nhưng ở đây có
                một số tùy chọn đặc biệt chỉ có trên Tik Tok.
              </List>
            </MultipleList>
            <Image src={imageContent6} />
            <List customclass={"title-list"}>
              5.3 Những tính năng chính để quay video Tik Tok
            </List>
            <MultipleList>
              <List customclass={"md:list-disc"}>
                Lật: Cho phép xoay camera trước/ sau tùy ý.
              </List>
              <List customclass={"md:list-disc"}>
                Tốc độ: Cho phép điều khiến tốc độ video nhanh/ chậm. Ví dụ: Nếu
                muốn quay Slow Motion Tik Tok, bạn chọn tốc độ video là 0.5x
                hoặc 0.3x.
              </List>
              <List customclass={"md:list-disc"}>
                Bộ lọc: Chứa những bộ lọc đa dạng theo chủ đề, tương tự Camera
                360.
              </List>
              <List customclass={"md:list-disc"}>
                Làm đẹp: Tính năng điều chỉnh giúp bạn quay video Tik Tok “ảo
                diệu” hơn. Sau khi nhấp vào, bạn có thể lựa chọn làm mắt to, mặt
                thon gọn, hoặc mịn da…
              </List>
              <List customclass={"md:list-disc"}>
                Hẹn giờ: Giúp bạn hẹn giờ bắt đầu quay video. Ví dụ: Khi cần
                quay lấy nguyên người, bạn chỉ cần để điện thoại lên giá đỡ,
                chọn bắt đầu quay video sau 3s, 5s…
              </List>
              <List customclass={"md:list-disc"}>
                Flash: Nhấp vào để bật đèn Flash.
              </List>
            </MultipleList>
            <List customclass={"title-list"}>
              5.4 Cách quay Tik Tok dài hơn 15s
            </List>
            <Paragragh>
              Tik Tok có 3 tùy chọn về thời lượng Video: 15s, 60s hoặc quay MV
              bằng Tik Tok.
            </Paragragh>
            <Paragragh>
              Thông thường, Tik Tok sẽ để mặc định quay video 15s, bạn sẽ chọn
              thời lượng bằng cách nhấp vào tùy chọn như hình dưới.
            </Paragragh>
            <Paragragh>
              Vì vậy, nếu muốn quay videotiktok Tik Tok dài hơn 15s, bạn chỉ cần
              nhấp vào tùy chọn 60s.
            </Paragragh>
            <List customclass={"title-list"}>
              5.5 Cách chèn nhạc/ chèn âm thanh cho video Tik Tok
            </List>
            <Paragragh>
              Đại đa số clip trên Tik Tok đều chèn hiệu ứng âm thanh/ âm nhạc
              nổi bật.
            </Paragragh>
            <Paragragh>
              <span className="text-gradient-tiktok">
                Để sử dụng tính năng chèn âm thanh Tik Tok, bạn chỉ cần:
              </span>
            </Paragragh>
            <MultipleList>
              <List customclass={"md:list-disc"}>
                Nhấp vào biểu tượng dấu Cộng để bắt đầu quay video.
              </List>
              <List customclass={"md:list-disc"}>
                {" "}
                Nhấp vào tùy chọn m Thanh như hình dưới.
              </List>
              <List customclass={"md:list-disc"}>
                {" "}
                Bạn sẽ được chuyển hướng về kho nhạcTik Tok.
              </List>
              <List customclass={"md:list-disc"}>
                {" "}
                Ở mục Khám Phá, bạn sẽ thấy danh sách bài hát đang nổi theo
                trend, kéo xuống dưới là danh sách được phân loại theo chủ đề.
              </List>
              <List customclass={"md:list-disc"}>
                Ở Tab Yêu Thích hiển thị danh sách những bài hát bạn đã bấm yêu
                thích.
              </List>
              <List customclass={"md:list-disc"}>
                Nhấp vào tên bài hát bạn muốn sử dụng và tiếp tục quay video như
                bình thường. Nhạc sẽ được phát trong lúc bạn quay video.
              </List>
              <List customclass={"md:list-disc"}>
                {" "}
                Nếu muốn đổi nhạc, hãy bấm vào m Thanh thêm lần nữa và chọn bài
                hát khác phù hợp.
              </List>
              <List customclass={"md:list-disc"}></List>
            </MultipleList>
            <List customclass={"title-list"}>
              5.6 Cách sử dụng hiệu ứng video trên Tik Tok
            </List>
            <Paragragh>
              <span className="text-gradient-tiktok text-[16px]">
                Clip Tik Tok sẽ không thể thực sự hấp dẫn nếu thiếu hiệu ứng.
                Nếu muốn tận dụng những hiệu ứng “độc lạ” Tik Tok, bạn chỉ cần:
              </span>
            </Paragragh>
            <MultipleList>
              <List customclass={"md:list-disc"}>
                {" "}
                Từ giao diện trang chủ, bấm dấu Cộng truy cập tính năng quay
                video.
              </List>
              <List customclass={"md:list-disc"}>
                Tiếp túc nhấp vào tùy chọn Hiệu Ứng ở góc trái màn hình.
              </List>
              <List customclass={"md:list-disc"}>
                Danh sách hiệu ứng được phân loại theo hiệu ứng hot, hiệu ứng
                mới, đẹp…Và một số chủ đề được quan tâm, bạn chỉ cần vuốt qua
                trái hoặc phải để xem danh sách.
              </List>
            </MultipleList>
            <Paragragh>
              Chọn hiệu ứng bạn muốn sử dụng. Lưu ý: Bạn có thể chèn nhiều hiệu
              ứng trong mỗi video nếu muốn.
            </Paragragh>
            <List customclass={"title-list"}>
              5.7 Cách biên tập video Tik Tok (chèn chữ/ icon/ hiệu ứng…) sau
              khi quay
            </List>
            <Paragragh>
              Sau khi quay video hoàn tất, bạn sẽ bấm vào dấu stick màu hồng để
              ngừng quay và chuyển sang bước biên tập.
            </Paragragh>
            <Paragragh>
              Bạn sẽ được chuyển hướng sang giao diện biên tập video.
            </Paragragh>
            <Paragragh>
              <span className="text-gradient-tiktok">
                Những tùy chọn chính trên trình biên tập video Tik Tok:
              </span>
            </Paragragh>
            <MultipleList>
              <List customclass={"md:list-disc"}>
                Âm thanh: Giúp chèn nhạc/ hiệu ứng âm thanh hài hước…Vào video
                Tik Tok.
              </List>
              <List customclass={"md:list-disc"}>
                Hiệu ứng: Tính năng tương tự như hướng dẫn ở phần 3.6, giúp bạn
                thêm hiệu ứng video.
              </List>
              <List customclass={"md:list-disc"}>
                Văn bản: Giúp bạn chèn chữ vào video tùy thích.
              </List>
              <List customclass={"md:list-disc"}>
                Nhãn dán: Chèn icon vào video. Ví dụ: Bạn muốn lấy icon mặt cười
                che mặt thật, chỉ cần sử dụng tính năng này Tik Tok.
              </List>
              <List customclass={"md:list-disc"}>
                Hiệu ứng giọng nói: Tổng hợp rất nhiều hiệu ứng giọng nói hài
                hước, thú vị, giúp bạn điều chỉnh giọng trong video Tik Tok.
              </List>
              <List customclass={"md:list-disc"}>
                {" "}
                Bộ lọc: Làm màu sắc video đẹp hơn, tăng sáng, giảm sáng… Đều có
                thể chỉnh sửa ở đây.
              </List>
            </MultipleList>
            <Paragragh>Bấm Tiếp sau khi hoàn tất để đăng video.</Paragragh>
            <List customclass={"title-list"}>
              5.8 Cách upload video có sẵn từ điện thoại lên Tik Tok
            </List>
            <Paragragh>
              <span className="text-gradient-tiktok">
                Nếu trong điện thoại bạn đã chuẩn bị video được biên tập sẵn,
                bạn chỉ cần:
              </span>
            </Paragragh>
            <MultipleList>
              <List customclass={"md:list-disc"}>
                Từ giao diện chính Tik Tok, nhấp vào dấu Cộng quay video.
              </List>
              <List customclass={"md:list-disc"}>
                Ở góc phải giao diện quay video, bạn sẽ thấy tùy chọn Tải Lên
              </List>
              <List customclass={"md:list-disc"}>
                Chọn clip có sẵn từ điện thoại.
              </List>
              <List customclass={"md:list-disc"}>
                Xem lại đoạn clip, bấm Tiếp nếu bạn đã vừa ý và bắt đầu tải lên.
              </List>
              <List customclass={"md:list-disc"}>
                Bạn cũng có thể giới hạn lại thời lượng video, chỉ cắt lấy đoạn
                hay nhất bằng cách sử dụng thanh ngang màu hồng TikTok, hoặc
                chèn thêm nhạc, icon, văn bản, hiệu ứng…Nếu muốn (Tương tự tính
                năng biên tập khi quay video trực tiếp).
              </List>
              <List customclass={"md:list-disc"}>
                Thêm mô tả video, gắn Hashtag, thêm vị trí (Không bắt buộc) và
                chọn chế độ đăng Video.
              </List>
              <List customclass={"md:list-disc"}>Xác nhận đăng video.</List>
            </MultipleList>
          </div>
          <div id="32">
            <Heading>2. Cách sử dụng Tik Tok trên máy tính</Heading>
            <SubHeading>
              Cách 1: Sử dụng phần mềm giả lập để cài đặt tiktok
            </SubHeading>
            <Paragragh>
              Để sử dụng{" "}
              <span className="text-gradient-tiktok">
                Tik Tok trên máy tính
              </span>
              , người dùng cần phải cài đặt các phần mềm giả lập Android, bài
              viết sẽ hướng dẫn bạn sử dụng phần mềm giả lập Android Nox Player.
            </Paragragh>
            <Image src={imageContent7} />
            <Paragragh>
              Trước tiên, bạn tải giả lập Android Nox Player cho máy tính{" "}
            </Paragragh>
            <Paragragh>
              Sau khi cài đặt thành công, chúng ta khởi động phần mềm lên
            </Paragragh>
            <Image src={imageContent8} />
            <Paragragh>Khởi động phần mềm giả lập Android Nox Player</Paragragh>
            <Image src={imageContent9} />
            <Paragragh>
              Nhấn chọn cửa hàng Google Play trên giao diện chính
            </Paragragh>
            <Paragragh>
              Trên thanh tìm kiến của Google Play, bạn nhập từ khóa{" "}
              <span className="text-gradient-tiktok">"Tik Tok"</span>
            </Paragragh>
            <Image src={imageContent10} />
            <Paragragh>Nhập từ khóa Tik Tok trên thanh tìm kiếm</Paragragh>
            <Image src={imageContent11} />
            <Paragragh>Nhấn chọn vào link ứng dụng Tik tok xuất hiện</Paragragh>
            <Paragragh>
              Bạn nhấn vào mục <span className="bold">Cài đặt</span> để chọn cài
              Tik Tok.
            </Paragragh>
            <Image src={imageContent12} />
            <Paragragh>Cài đặt ứng dụng Tik Tok</Paragragh>
            <Image src={imageContent13} />
            <Paragragh>
              Nhấn tiếp Chấp nhận để đồng ý với các điều khoản
            </Paragragh>
            <Paragragh>
              Lúc này, ứng dụng Tik tok sẽ được tự động tải và cài đặt trên máy
              tính của bạn.
            </Paragragh>
            <Image src={imageContent14} />
            <Paragragh>
              Ứng dụng Tik Tok sẽ tự động được tải và cài đặt
            </Paragragh>
            <Paragragh>
              Quá trình cài đặt kết thúc, nhấn chọn Mở để khởi động ứng dụng.
            </Paragragh>
            <Image src={imageContent15} />
            <Paragragh>Khởi động ứng dụng bằng cách nhấn chọn Mở</Paragragh>
            <Image src={imageContent16} />
            <Paragragh>
              Giao diện ứng dụng Tik Tok sẽ hiển thị trên máy tính
            </Paragragh>
            <Paragragh>
              Các thao tác còn lại tương tự như dùng điện thoại
            </Paragragh>
            <SubHeading>Cách 2: Xem tiktok trực tiếp trên web </SubHeading>
            <Paragragh>Bước 1: lên gg và gõ tìm kiếm tiktok </Paragragh>
            <Image src={imageContent17} />
            <Paragragh>
              Sau đó nhấn vào Make your day-tiktok để vào được trang tiktok{" "}
            </Paragragh>
            <Image src={imageContent18} />
            <Paragragh>
              Bước 3: đăng nhập vào tiktok hoặc đăng ký nếu chưa có tài khoản{" "}
            </Paragragh>
            <Paragragh>
              Nếu có tài khoản r có thể đăng nhập bằng 1 trong các hình thức
              dưới đây
            </Paragragh>
            <Image src={imageContent19} />
            <Paragragh>Nếu chưa có tài khoản nhấn vào đăng ký</Paragragh>
            <Image src={imageContent20} />
            <Paragragh>Đăng kí bằng 1 trong 3 hình thức trên </Paragragh>
            <Paragragh>
              Sau khi đã có tài khoản tiến hành sử dụng như bình thường
            </Paragragh>
          </div>
        </div>

        <div id="4">
          <Heading customclass={"pt-4"}>
            III. LỢI ÍCH ĐỐI VỚI HỌC SINH - SINH VIÊN
          </Heading>
          <SubHeading>
            Bên cạnh đó tiktok cũng giúp cho ta học hỏi thêm nhiều kinh nghiệm
            và có thêm nhiều hiểu biết{" "}
          </SubHeading>
          <div id="41">
            <List customclass={"title-list"}>
              1. Lướt Tiktok để rèn luyện ngoại ngữ
            </List>
            <Paragragh>
              Có rất nhiều kênh Tiktok giúp sinh viên rèn luyện ngoại ngữ, đặc
              biệt là giao tiếp và phát âm. Hãy tìm kiếm và follow ngay các kênh
              Tiktok đó bằng cách search các từ khoá liên quan đến học ngoại
              ngữ, chẳng hạn như là giao tiếp Tiếng Anh, phát âm Tiếng Anh,… Khi
              follow và thường xuyên theo dõi các video về học ngoại ngữ thì các
              video về chủ đề này cũng sẽ hiển thị nhiều hơn với các em. Vậy là
              mỗi ngày khi lướt Tiktok, sinh viên cũng sẽ học được rất nhiều
              kiến thức hữu ích, giúp mình rèn luyện ngoại ngữ và tiến bộ hơn
              mỗi ngày
            </Paragragh>
          </div>
          <div id="42">
            <List customclass={"title-list"}>
              2. Tích luỹ kinh nghiệm phỏng vấn trên Tiktok
            </List>

            <Paragragh>
              Nếu là sinh viên sắp ra trường, chắc chắn các em sẽ rất quan tâm
              đến vấn đề ứng tuyển, viết CV, phỏng vấn,… Các em hoàn toàn có thể
              search Google để xem cách viết CV gây ấn tượng với nhà tuyển dụng,
              nhưng riêng với kinh nghiệm phỏng vấn thì anh khuyên rằng các em
              nên theo dõi thông qua các video trên Tiktok thì sẽ hữu ích hơn.
            </Paragragh>
            <Paragragh>
              Tương tự như học ngoại ngữ, thì khi muốn tìm các kênh Tiktok
              chuyên hướng dẫn về cách ứng tuyển, trả lời phỏng vấn thì các em
              chỉ cần search các từ khoá liên quan. Vậy là lướt Tiktok mỗi ngày
              cũng sẽ giúp các em tích luỹ thêm nhiều kinh nghiệm phỏng vấn hữu
              ích đó. Hiện tại, kênh Tiktok Tự Tin Vào Đời cũng đang thực hiện
              chuỗi video hướng dẫn trả lời các câu hỏi phỏng vấn thường gặp.
              Các em có thể follow tại đây nhé.
            </Paragragh>
          </div>
          <div id="43">
            <List customclass={"title-list"}>
              3. Lướt Tiktok để trau dồi kỹ năng mềm
            </List>
            <Paragragh>
              Điều tiếp theo mà sinh viên có thể học được khi lướt Tiktok chính
              là những kỹ năng mềm liên quan đến công việc. Vì chưa có nhiều
              kinh nghiệm làm việc nên kỹ năng mềm sẽ trở thành một trong những
              tiêu chí quan trọng mà nhà tuyển dụng sẽ dùng để đánh giá sinh
              viên mới ra trường. Chính vì thế, các em cần chủ động tìm hiểu xem
              công việc sau này yêu cầu mình phải thành tạo các kỹ năng mềm nào,
              từ đó, tự lên kế hoạch trau dồi các kỹ năng mềm đó càng sớm càng
              tốt
            </Paragragh>
            <Paragragh>
              Có rất nhiều kênh Tiktok chia sẻ cách tự rèn luyện các kỹ năng mềm
              cực kỳ hữu ích. Chính vì thế, sinh viên nên tìm kiếm và theo dõi
              các kênh này, để góp phần biến Tiktok thành một công cụ hữu ích
              cho việc trau dồi, phát triển bản thân. Chắc chắn các em sẽ khó
              lòng thành thạo một kỹ năng mềm nào đó nếu chỉ lướt qua 1-2 video
              về nó, nhưng nếu mình đều đặn lướt Tiktok để theo dõi các video
              chia sẻ về các kỹ năng mềm thì mưa dầm thấm lâu, từ từ các em sẽ
              thất mình tiến bộ rất nhiều.
            </Paragragh>
          </div>
          <div id="44">
            <List customclass={"title-list"}>
              4. Cập nhật kiến thức chuyên ngành khi lướt Tiktok
            </List>
            <Paragragh>
              Bên cạnh việc học trên trường, sinh viên cũng hoàn toàn có thể cập
              nhật kiến thức chuyên ngành khi lướt Tiktok. Các em có biết những
              anh chị nào đang nổi tiếng trong ngành học của mình không? Hãy tìm
              kiếm và follow nếu như họ đang có một kênh Tiktok chuyên chia sẻ
              về kiến thức chuyên ngành, kỹ năng chuyên môn liên quan đến công
              việc trong ngànhĐó sẽ là những kiến thức thực chiến, cực kỳ hữu
              ích, sẽ giúp các em có góc nhìn thực tế hơn về những kiến thức lý
              thuyết mà mình đã được học trên trường đó.
            </Paragragh>
          </div>
          <div id="45">
            <List customclass={"title-list"}>
              5. Nhận được nhiều lời khuyên hữu ích từ các Tiktok Mentor
            </List>
            <Paragragh>
              Wow, vậy là sinh viên sẽ học hỏi được rất nhiều điều khi lướt
              Tiktok đó. Tuy nhiên, chưa dừng lại ở đó, các em còn có thể học
              hỏi thêm được rất nhiều điều, nhận được rất nhiều lời khuyên hữu
              ích cả trong học tập, công việc lẫn trong cuộc sống. Đó chính là
              những lời khuyên cực kỳ hữu ích từ các Tiktok Mentor – Tức là
              những người đang thành công muốn chia sẻ lại kinh nghiệm và những
              lời khuyên của mình cho mọi người. Họ đã có một lượng khán giả cực
              kỳ ổn định trên Tiktok bởi những video chia sẻ cực kỳ hữu ích của
              họ.
            </Paragragh>
            <Paragragh>
              Các em hoàn toàn có thể dễ dàng tìm kiếm các kênh Tiktok ấy thông
              qua hashtag #Tiktokmentor, hoặc dễ hơn, các em cũng có thể theo
              dõi kênh Tiktok Tự Tin Vào Đời – Đây là kênh do anh Hoàng Khôi
              Phạm – Thủ khoa Marketing UEH lập ra để sharing về kinh nghiệm học
              tập, thi cử, ứng tuyển, phỏng vấn, rèn luyện ngoại ngữ, kỹ năng
              mềm,…
            </Paragragh>
          </div>
        </div>
        <div id="5">
          <Heading>III. Ưu điểm và nhược điểm của microsoft team</Heading>
          <div id="51">
            <SubHeading>1. Ưu điểm</SubHeading>
            <Paragragh>
              Đầu tiên Tik Tok mang đến cho chúng ta những phát giây giải trí
              vui vẻ và mới lạ chưa ứng dụng nào hiện nay có được. Đem đến cho
              người dùng những trải nghiệm tuyệt vời nhất với trí tuệ nhân tạo
              AI.
            </Paragragh>
            <Paragragh>
              Thao tác sử dụng đơn giản nhưng mang đến cho chúng ta những sản
              phẩm độc đáo
            </Paragragh>
            <Paragragh>
              Tiếp đến kích thích sự sáng tạo của con người trong mọi hoàn cảnh.
            </Paragragh>
            <Paragragh>
              Có thể tìm hiểu về nhiều nền văn hóa mới trên nhiều quốc gia khác
              nhau. Ví dụ như bạn ở Việt Nam những bạn có thể xem cách người
              Trung Quốc tổ chức một đám cưới theo phong cách cổ điển, bạn có
              thể xem cách chế tạo ra những chiếc bình thủy tinh, cách làm ra
              những vật dụng trong đời sống hàng ngày…
            </Paragragh>
            <Paragragh>
              TikTok là tạo trend và bắt trend một cách dễ dàng
            </Paragragh>
            <Paragragh>
              Là nơi giao lưu kết nối bạn bè quốc tế, trao đổi và trau dồi thêm
              trình độ ngoại ngữ.
            </Paragragh>
            <Paragragh>
              Giúp người chơi kiếm thêm thu nhập bằng cách bán hàng online, hay
              quảng cáo thương hiệu…
            </Paragragh>
            <Paragragh>Ưu điểm của TikTok là có công ty tại Việt Nam</Paragragh>
            <Paragragh>Mua hàng dựa trên nhu cầu về giải trí</Paragragh>
            <Paragragh>
              Lợi ích của TikTok Shop trong việc kinh doanh online
            </Paragragh>
            </div>
            <Image src={imageContent21} />

            <div id="52">
              <SubHeading>2. Nhược điểm</SubHeading>
              <Paragragh>
                Nội dung đăng tải lên Tik Tok không đựng kiểm định trước khi đăng.
                Do đó, dẫn đến tình trạng có nhiều video bạo lực, tình dục, phản
                cảm… cũng được đăng tải. Dẫn đến những mối nguy hiểm cho người xem
                đặc biệt là giới trẻ và trẻ em. Hiện nay sau khi có nhiều phản hồi
                thì có nhiều video không hợp lệ có nội phản cảm, gây ảnh hưởng đến
                tâm lý người xem cũng đã bị tháo gỡ… tuy nhiên biện pháp này chưa
                thực sự triệt để.
              </Paragragh>
              <Paragragh>
                Gây nghiện, bạn có thể dừng ra hàng giờ đồng hồ chỉ để lướt và xem
                các video được chia sẻ trên Tik Tok mà không đem đến bất kì một
                mục tiêu gì. Đơn thuần chỉ là ngồi và lướt.
              </Paragragh>
              <Paragragh>
                Dùng các vật dụng nguy hiểm tác động trực tiếp lên cơ thể mình
                hoặc người khác để quay video và chia sẻ cho người dùng xem. Mang
                đến những thương tích đau thương cho chính bản thân mình
              </Paragragh>
              <Paragragh>
                Dùng các chiêu trò “phản cảm” để có nhiều lượt yêu thích và chia
                sẻ. Dẫn đến tình trạng tâm lý bất ổn, thường xuyên ảo tưởng…
              </Paragragh>
              <Paragragh>
                Khả năng bị rò rỉ thông tin người dùng rất lớn, Tik Tok sẽ dùng
                các thuật toán để đoán định nhu cầu, mục đích người dùng để cung
                cấp những sản phẩm dịch vụ.
              </Paragragh>
            </div>
          </div>
        </div>
      </div>
  );
};

export default TikTok;
