import React from "react";
import styles from "../tailwind-styles";
import {
  imageTitle1,
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
  imageContent22,
  imageContent23,
  imageContent24,
  imageContent25,
  imageContent26,
  imageContent27,
  imageContent28,
  imageContent29,
  imageContent30,
  imageContent31,
  imageContent32,
} from "../assets";
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
import contents from "../constants/data.js";

const MicrosoftTeam = () => {
  return (
    <div className={`${styles.wrapper} `}>
      <div className={`${styles.container} `}>
        <Image src={imageTitle1} customclass={"!w-[100%]"} />
        <Title>
          Hướng
          dẫn sử dụng Microsoft Team
        </Title>
        <Contents contents={contents} />

        <div id="1">
          <Heading customclass={"mt-10 mb-4"}>LỜI NÓI ĐẦU</Heading>
          <SubHeading customclass={"text-[25px]"}>
            Trong xu hướng phát triển của công nghệ hiện nay, việc tổ chức các
            buổi họp trực tuyến giờ đây đã vô cùng dễ dàng với Microsoft Teams.
            Nhưng bạn đã biết đến Microsoft Teams chưa? Cẩm nang này sẽ giới
            thiệu Microsoft Teams trên máy tính để dạy, học online.
          </SubHeading>
        </div>

        <div id="2">
          <Heading>I.GIỚI THIỆU VỀ MICROSOFT TEAMS</Heading>
          <div id="21">
            <SubHeading customclass={"mb-0"}>1. Giới thiệu khái quát</SubHeading>
            <MultipleList>
              <List customclass={" md:!list-disc"}>
                <span className="text-customPurple cursor-pointer font-semibold">
                  Microsoft Teams
                </span>{" "}
                ( hay còn gọi là Teams) là một hệ thống cung cấp chat, meetings,
                notes, và tệp đính kèm.
              </List>
              <List customclass={" md:!list-disc"}>
                Microsoft công bố Teams tại một buổi hội thảo ở New York, và ra
                mắt dịch vụ này trên toàn thế giới vào ngày 14 tháng 3 năm 2017.
              </List>
              <List customclass={" md:!list-disc"}>
                Teams của Microsoft được tạo ra và hiện đang được lãnh đạo bởi
                Brian MacDonald, Phó giám đốc hãng Microsoft.
              </List>
              <List customclass={" md:!list-disc"}>
                <span>Microsoft Teams</span> là một nền tảng giao tiếp cho doanh
                nghiệp do Microsoft phát triển và là một phần của Microsoft 365.
                Teams ,chủ yếu cạnh tranh với dịch vụ tương tự như Slack & Zoom,
                cung cấp trò chuyện trong không gian làm việc và video meetings,
                lưu trữ tệp và tích hợp ứng dụng. Teams đang thay thế các nền tảng
                cộng tác và nhắn tin doanh nghiệp khác của Microsoft bao gồm cả
                Skype for Business và Microsoft Classroom.
              </List>
            </MultipleList>
          </div>
          <div id="22">
            <SubHeading customclass={"mt-8 mb-0"}>2. Tính Năng</SubHeading>
            <MultipleList>
              <List customclass={"title-list"}>
                a. Tổ chức cuộc họp ở bất kỳ mọi nơi
              </List>
              <Paragragh>
                Tổ chức hội thảo âm thanh, video và hội thảo web với bất kỳ ai.
                Ngoài ra, với sự hỗ trợ của Microsoft Teams, người dùng còn nhận
                các tính năng khác lập lịch biểu, ghi chú cuộc họp, chia sẻ màn
                hình, ghi cuộc họp và nhắn tin tức thời.
              </Paragragh>
              <Image src={imageContent1} />
              <Paragragh>
                Người dùng có thể lên lịch cuộc họp Teams với bất kỳ ai có địa chỉ
                email người tiêu dùng hoặc doanh nghiệp hợp lệ. Họ chỉ cần bấm vào
                liên kết được gửi qua email để tham gia ngay cuộc họp trên trình
                duyệt web
              </Paragragh>
              <List customclass={" title-list"}>
                b. Tổ chức cuộc họp lớn, các sự kiện trực tiếp
              </List>
              <Paragragh>
                <span>Microsoft Teams</span> còn cho phép mở các cuộc họp lớn, hội
                thảo trực tuyến, sự kiện toàn công ty và thuyết trình với tối đa
                10.000 người dự với trải nghiệm nhất quán trên các nền tảng.
              </Paragragh>
              <Image src={imageContent2} />
              <List customclass={"title-list"}>
                c. Hỗ trợ người dùng dễ dàng nắm bắt thông tin cuộc họp
              </List>
              <Paragragh>
                Người dùng có thể ghi âm, quay video và ghi lại hoạt động của cuộc
                họp bằng chia sẻ màn hình bằng hoặc tạo ghi chú cuộc họp ngay trên
                Teams. Ngoài ra, bạn còn có thể ghi âm cuộc họp với tính năng được
                hỗ trợ trên nền tảng Teams.
              </Paragragh>
              <Image src={imageContent3} />
              <Paragragh>
                Các ghi chú này cũng dễ dàng truy cập giúp người tham gia cuộc họp
                mới dễ dàng nắm bắt thông tin từ các cuộc họp trước đây hơn.
              </Paragragh>
              <List customclass={"title-list"}>
                d. Chia sẻ nội dung và cộng tác một cách dễ dàng
              </List>
              <Paragragh>
                Một trong những ưu điểm của Microsoft Teams đó là bạn có thể chia
                sẻ nội dung của mình và cộng tác dễ dàng trong suốt cuộc họp thông
                qua tích hợp liền mạch với <span> Office 365.</span>
              </Paragragh>
              <List customclass={"title-list"}>
                e. Lưu trữ tài liệu trong Sharepoint
              </List>
              <Paragragh>
                Khi bạn sử dụng Microsoft Team hệ thống sẽ tự động hỗ trợ một
                trang SharePoint Online cho mỗi nhóm. Nơi lưu trữ các tài liệu mặc
                định của mỗi nhóm. Do đó, mỗi dữ liệu chia sẻ trên nhóm sẽ được
                lưu tự động vào file này. Người dùng có thể tùy chỉnh quyền riêng
                tư để bảo mật dữ liệu tốt nhất.
              </Paragragh>
              <List customclass={"title-list"}>f. Tạo hội nghị âm thanh</List>
              <Paragragh>
                Đây là một tính năng tuyệt vời mà không có ở bất kỳ nền tảng nào.
                Đây là một tính năng giống như là chiếc điện thoại của chúng ta.
                Bất kỳ ai trong công ty của bạn đều có thể tham gia qua điện
                thoại. Ngay cả những người dùng đang di chuyển cũng có thể tham
                gia mà không cần internet. (Lưu ý tính năng này yêu cầu cấp phép
                bổ sung). Điện thoại liên lạc là trong doanh nghiệp là rất cần
                thiết nhưng thường với chi phí rất cao. Với team bạn có thể thay
                thế toàn bộ hệ thống điện thoại trong doanh nghiệp của bạn dễ
                dàng. Phần miền này hỗ trợ cuộc gọi qua IP (VoIP), giúp doanh
                nghiệp không phụ thuộc vào nhà cung cấp VoIP tốn phí
              </Paragragh>
              <List customclass={"title-list"}>g. Khả năng tích hợp cao</List>
              <Paragragh>
                Khi bạn đăng ký một giấy phép của Microsodt 365 bạn có hơn 300 ứng
                dụng dành cho công việc. Ngoài ra, bạn có thể tích hợp thêm các
                ứng dụng bên ngoài, các ứng dụng bạn thường xuyên sử dụng cũng có
                thể sử dụng lịch hoạt ngay trong Microsoft Teams. Khi bạn tạo các
                ghi chú với thời gian và công việc cụ thể Note sẽ nhắc nhở và báo
                khi công việc đến thời gian thực hiện. Sau khi hoàn thành công
                việc Note tự động đánh dấu. Sắp xếp các công việc và thời gian
                thực hiện ưu tiên trước.
              </Paragragh>
              <List customclass={"title-list"}>h. Tính năng chat</List>
              <Paragragh>
                Trong quá trình làm việc thì trao đổi tức thời là tính năng không
                thể thiếu. Khi có gợi ý người dùng trong công ty bạn có thể trò
                chuyện nhanh chóng. Ngoài ra tất cả các tài liệu trong quá trình
                trao đổi sẽ được tự động lưu lại đê người dùng dễ dàng thao tác.
                Một bài viết được đăng lên kênh dùng chung mọi thành viên đề có
                thể xem bài viết hoặc tài liệu đó. Các bạn muốn thêm một người
                dùng vào xem đơn giản sử dụng “@ + tên thành viên muốn nhắc đến”
              </Paragragh>
            </MultipleList>
          </div>
        </div>

        <div id="3">
          <Heading customclass={"pt-4"}>II. CÁCH CÀI ĐẶT VÀ TRUY CẬP</Heading>
          <div id="31">
            <SubHeading>1. Đăng nhập TEAMS:</SubHeading>
            <Paragragh>
              <span className="bold">Cách 1</span>: Sử dụng trình duyệt Google
              Chrome hoặc MS Edge để truy cập vào trang chủ MS Teams:{" "}
              <a href="https://teams.microsoft.com" className="link">
                https://teams.microsoft.com
              </a>
            </Paragragh>
            <Image
              src={imageContent4}
              customclass={"w-[30%] !object-contain"}
            />
            <Paragragh>
              Sau đó đăng nhập bằng tài khoản email của nhà trường.
            </Paragragh>
            <Notes>
              <Paragragh>
                Sau khi nhập tên đăng nhập, chọn Work or School account. Sử dụng
                email của trường (CBGV @vnu.edu.vn, người học
                xxxxxxx@st.vnu.edu.vn)
              </Paragragh>
            </Notes>
            <Paragragh>
              Hoặc nếu đã từng đăng nhập trước đó, máy sẽ hiện thị tài khoản để
              đăng nhập
            </Paragragh>
            <Image
              src={imageContent5}
              customclass={"w-[30%] !object-contain"}
            />
            <Paragragh>
              <span className="bold">Cách 2</span>: Download Microsoft Teams về
              máy tính
              <br />
              Link download:
              <a
                href="https://products.office.com/vi-vn/microsoft-teams/downloadapp#desktopAppDownloa
              dregion"
                className="link"
              >
                https://products.office.com/vi-vn/microsoft-teams/downloadapp#desktopAppDownloa
                dregion
              </a>
              <br />
              Hệ thống sẽ tự động lựa chọn bản cài đặt phù hợp với máy tính của
              bạn
            </Paragragh>
            <Paragragh>
              <span className="bold">Cách 3</span>: Trên thiết bị di động: vào
              play store (Google) trên thiết bị android hoặc Apple app store để
              tìm app Micro Teams hoặc click vào đây:
              <a
                href="https://products.office.com/vi-vn/microsoft-teams/download-app"
                className="link"
              >
                https://products.office.com/vi-vn/microsoft-teams/download-app
              </a>
            </Paragragh>
          </div>
          <div id="32">
            <SubHeading>2. Cách tạo lớp</SubHeading>
            <Paragragh>
              <span className="bold">Bước 1</span>: Tại giao diện chính của
              Microsoft Teams, chọn mục Nhóm.
            </Paragragh>
            <Image src={imageContent6} />
            <Paragragh>
              <span className="bold">Bước 2</span>: Chọn Tham gia hoặc tạo nhóm
              để tiến hành tạo nhóm của bạn.
            </Paragragh>
            <Image src={imageContent7} />

            <Paragragh>
              <span className="bold">Bước 3</span>: Để tạo nhóm mới cho mình,
              chọn Tạo nhóm (1). Nếu bạn được mời tham gia nhóm thì bạn có thể
              nhập mã nhóm vào ô Nhập mã bên phải (2)
            </Paragragh>
            <Image src={imageContent8} />

            <Paragragh>
              <span className="bold">Bước 4</span>: Sau khi nhấn Tạo nhóm, hệ
              thống sẽ hiển thị hộp thoại yêu cầu thông tin nhóm của bạn. Bạn có
              thể nhập Tên nhóm (1), Mô tả (2) và thiết lập Quyền riêng tư (3)
              của nhóm bằng cách chọn mũi tên bên phải để hiển thị 2 tùy chọn
              quyền riêng tư: Công khai hoặc Riêng tư
            </Paragragh>
            <Image src={imageContent9} />

            <Paragragh>
              <span className="bold">Bước 5</span>: Tiếp theo hãy thêm thành
              viên vào nhóm bằng cách nhập tên hoặc nhóm bạn muốn thêm vào, có
              thể thêm nhiều thành viên, sau đó nhấn Thêm. Ngoài ra bạn có thể
              nhấn Bỏ qua nếu bạn muốn thêm thành viên sau.
            </Paragragh>
            <Image src={imageContent10} />

            <Paragragh>
              <span className="bold">Bước 6</span>: Tên các thành viên mới sẽ
              hiển thị bên dưới sau khi bạn thêm thành viên. Cuối cùng nhấn Đóng
              để hoàn tất việc tạo nhóm.
            </Paragragh>
            <Image src={imageContent11} />

            <div id="33">
              <SubHeading>
                3. Tạo đường link truy cập hoặc mã truy cập cho sinh viên
              </SubHeading>
              <Paragragh>
                Để chia sẻ phòng họp, học online trên Microsoft Teams bạn chỉ
                cần nhấn vào biểu tượng 3 dấu chấm ở bên phải tên phòng họp -
                Chọn Nhận liên kết đến nhóm.
              </Paragragh>
              <Image src={imageContent12} />

              <Paragragh>
                Chọn Sao chép và gửi đường link đến những người mà bạn muốn chia
                sẻ phòng họp.
              </Paragragh>
              <Image src={imageContent13} />
            </div>
          </div>
        </div>

        <div id="4">
          <Heading customclass={"pt-4"}>
            III. HƯỚNG DẪN DÀNH CHO SINH VIÊN
          </Heading>
          <div id="41">
            <SubHeading>
              1. Cách sử dụng các tính năng chính trên Microsoft Teams:
            </SubHeading>
            <Paragragh>
              Sau khi tạo hoặc vào được phòng học, họp online. Bạn sẽ thấy giao
              diện của Microsoft Teams với các biểu tượng tương ứng với các tính
              năng trên thanh công cụ theo thứ tự từ trái sang phải như:
              <br />
              <br />
              Hiển thị danh sách thành viên tham gia.
              <br />
              Hiển thị cuộc hội thoại. <br />
              Giơ tay. <br />
              Chia nhóm cho lớp học, họp online. <br />
              Bật/Tắt micro. <br />
              Bật/Tắt camera hoặc webcam. <br />
              Chia sẻ màn hình. <br />
              Kết thúc buổi học, họp online. <br />
            </Paragragh>
            <Image src={imageContent14}></Image>
          </div>
          <div id="42">
            <SubHeading>
              2. Cách tìm kiếm, tham gia nhóm lớp học, họp online trên Microsoft
              Teams
            </SubHeading>
            <Paragragh>
              <span className="bold">Hướng dẫn nhanh</span>
              <ul className="md:pl-8">
                <List>
                  Mở Microsoft Teams trên máy tính, nhấn vào biểu tượng Nhóm ở
                  góc bên trái - Chọn Tham gia nhóm hoặc tạo nhóm.
                </List>
                <List>Nhập tên hoặc mã nhóm vào khung tìm kiếm.</List>
                <List>Nhấn Enter để tìm nhóm - Chọn Tham gia nhóm.</List>
              </ul>
              <span className="bold">Hướng dẫn chi tiết</span>
              <div className="md:pl-8">
                <List>
                  <span className="bold">Bước 1 </span>: Mở Microsoft Teams trên
                  máy tính, nhấn vào biểu tượng Nhóm ở góc bên trái - Chọn Tham
                  gia hoặc tạo nhóm.
                </List>
                <Image src={imageContent15} />
                <List>
                  <span className="bold">Bước 2</span>: Sẽ có 2 cách tìm nhóm để
                  bạn lựa chọn:
                </List>
                <Paragragh>
                  Nếu bạn tìm nhóm bằng mã, bạn chỉ cần nhập mã nhóm vào ô Nhập
                  mã.
                </Paragragh>
                <Image src={imageContent16} />
                <Paragragh>
                  Nếu bạn tìm nhóm bằng tên, bạn chỉ cần nhập tên nhóm vào ô Tìm
                  kiếm nhóm.
                </Paragragh>
                <Image src={imageContent17} />
                <List>
                  <span className="bold">Bước 3</span>: Nhấn Enter để tìm nhóm -
                  Chọn Tham gia nhóm.
                </List>
                <Image src={imageContent18} />
              </div>
            </Paragragh>
          </div>
          <div id="43">
            <SubHeading>
              {" "}
              3.Cách chia sẻ màn hình trên Microsoft Teams{" "}
            </SubHeading>
            <Paragragh>
              <span className="bold">Hướng dẫn nhanh</span>
            </Paragragh>
            <Paragragh>
              Sau khi truy cập vào đường link để học, họp online trên Microsoft
              Teams, nhấn vào biểu tượng mũi tên.
            </Paragragh>
            <Paragragh>Chọn Chia sẻ</Paragragh>
            <Paragragh>
              <span className="bold">Hướng dẫn chi tiết</span>
            </Paragragh>
            <Paragragh>
              <span className="bold">Bước 1</span>: Sau khi truy cập vào đường
              link để học, họp online trên Microsoft Teams, nhấn vào biểu tượng
              mũi tên.
            </Paragragh>
            <Image src={imageContent19} />
            <Paragragh>
              <span className="bold">Bước 2</span>: Sẽ có 3 hình thức để bạn lựa
              chọn:
            </Paragragh>
            <Image src={imageContent20} />
            <Paragragh>
              Toàn màn hình: chia sẻ toàn màn hình máy tính của bạn với mọi
              người.
            </Paragragh>
            <Paragragh>
              Cửa sổ: chỉ chia sẻ 1 cửa sổ của 1 chương trình mà bạn đang sử
              dụng.
            </Paragragh>
            <Paragragh>
              Thẻ trình duyệt Chrome: chỉ chia sẻ duy nhất 1 tab trên Google
              Chrome
            </Paragragh>
            <Paragragh>
              Lựa chọn hình thức mà bạn muốn chia sẻ màn hình - Chọn Chia sẻ.
            </Paragragh>

            <Image src={imageContent21} />

            <Paragragh>Để dừng chia sẻ màn hình, chọn Dừng chia sẻ.</Paragragh>
            <Image src={imageContent22} />
          </div>
          <div id="44">
            <SubHeading>
              4. Cách tạo lịch họp, học online trên Microsoft Teams
            </SubHeading>
            <Paragragh>
              <span className="bold">Bước 1</span>: Tại giao diện chính của
              Microsoft Teams, chọn Lịch trên thanh công cụ bên trái.
            </Paragragh>
            <Image src={imageContent23} />
            <Paragragh>Chọn Lịch</Paragragh>
            <Paragragh>
              <span className="bold">Bước 2</span>: Trong bảng lịch, chọn Cuộc
              họp mới để tạo lịch họp.
            </Paragragh>
            <Image src={imageContent24} />
            <Paragragh>Chọn Cuộc họp mới</Paragragh>
            <Paragragh>
              <span className="bold">Bước 3</span>: Nhập Tiêu đề cuộc họp (1),
              nhập tên người tham dự (2) (Có thể thêm nhiều người).
            </Paragragh>
            <Image src={imageContent25} />
            <Paragragh>Nhập Tên - Thêm người dự</Paragragh>
            <Paragragh>
              <span className="bold">Bước 4</span>: Chọn Thời gian bắt đầu cuộc
              họp và Thời gian kết thúc cuộc họp.
            </Paragragh>
            <Image src={imageContent26} />
            <Paragragh>Nhập thời gian họp</Paragragh>
            <Paragragh>
              <span className="bold">Bước 5</span>: Nếu bạn muốn cuộc họp của
              bạn diễn ra mỗi tuần hay mỗi ngày vào khung giờ bạn chọn, bạn có
              thể tùy chỉnh Lặp lại cuộc họp như hình dưới đây.
            </Paragragh>
            <Image src={imageContent27} />
            <Paragragh>Tùy chọn lặp lại</Paragragh>
            <Paragragh>
              <span className="bold">Bước 6</span>: Chọn Kênh (nhóm) tổ chức
              cuộc họp.
            </Paragragh>
            <Image src={imageContent28} />
            <Paragragh>Chọn kênh</Paragragh>
            <Paragragh>
              <span className="bold">Bước 7</span>: Để nhắc nhở vị trí cuộc họp
              của bạn, nhập vào vùng Thêm vị trí (1). Sau đó nhập Mô tả cuộc họp
              (2) bên dưới. (Không bắt buộc)
            </Paragragh>
            <Image src={imageContent29} />
            <Paragragh>Thêm Vị trí họp - Mô tả</Paragragh>
            <Paragragh>
              <span className="bold">Bước 8</span>: Cuối cùng nhấn Gửi để hoàn
              tất việc tạo lịch họp.
            </Paragragh>
            <Image src={imageContent30} />
            <Paragragh>Nhấn Gửi</Paragragh>
          </div>
          <div id="5">
            <Heading>III. Ưu điểm và nhược điểm của microsoft team</Heading>
            <div id="51">
              <SubHeading>1. Ưu điểm</SubHeading>
              <Paragragh>
                Microsoft Teams có khả năng hỗ trợ mọi hoạt động cộng tác giữa
                các thành viên trong doanh nghiệp. Điểm mạnh của phần mềm này
                chính là các tính năng được phát triển về cả chiều rộng lẫn
                chiều sâu trong không gian cộng tác.
              </Paragragh>
              <Paragragh>
                <span>
                  Không mất thêm chi phí nếu doanh nghiệp bạn đang sử dụng
                  Office 365
                </span>{" "}
              </Paragragh>
              <Paragragh>
                Nếu doanh nghiệp đang sử dụng Office 365 bản quyền, phần mềm
                Microsoft Teams đã được tích hợp sẵn mà bạn không mất thêm bất
                kỳ chi phí bổ sung nào (trừ gói Office 365 Business). Hơn nữa,
                nếu không cần tới các chức năng cao cấp, phiên bản miễn phí của
                Teams có thể là lựa chọn hữu ích cho doanh nghiệp bạn.
              </Paragragh>
              <Paragragh>
                <span>Họp trực tuyến, gọi điện và chat ở mọi lúc mọi nơi</span>
              </Paragragh>
              <Paragragh>
                Cuộc họp trực tuyến là một trong những thế mạnh của Microsoft
                Teams. Quy mô của cuộc họp có thể là 2 người, 10 người,... và
                tối đa là 150 người. Toàn bộ chu kỳ họp sẽ được tự động hóa, từ
                việc lập lịch biểu, ghi chú cuộc họp tới tính năng chia sẻ màn
                hình, ghi âm lại nội dung và nhắn tin tức thời ngay trong phòng
                họp. Đặc biệt, giới hạn lên đến 10.000 người tham dự cùng lúc
                nếu Tenant (Tổ chức) có 15 Live Event diễn ra đồng thời.
              </Paragragh>
              <Paragragh>
                Với cloud calling, Teams đã tích hợp Skype vào bên trong để đảm
                bảo đầy đủ các tính năng gọi điện online qua đám mây.
              </Paragragh>
              <Paragragh>
                Tiếp theo, Teams đã kết hợp hai gói dịch vụ Direct Routing (Định
                tuyến Trực tiếp) và Calling Plan (Gói thuê bao) giúp người dùng
                có thể gọi điện linh hoạt, nhanh chóng và toàn diện. Theo đó,
                một số điện thoại có thể kết nối giữa nhà mạng di động với Teams
                hoặc chuyển thành thuê bao chính thức của Teams, từ đó dễ dàng
                xử lý các cuộc gọi phức tạp trên quy mô toàn cầu. Lưu ý rằng tại
                Việt Nam, để sử dụng Direct Routing, doanh nghiệp cần đầu tư một
                khoản chi phí khá cao để sử dụng SBCs system thì mới có thể kết
                hợp với tổng đài ảo sử dụng đầu số PSTN.
              </Paragragh>
              <Paragragh>
                Không chỉ thế, hệ thống gọi điện của Teams còn sở hữu các tính
                năng thú vị khác như chuyển tiếp tư vấn, nhạc chờ, tạm dừng cuộc
                gọi, gửi thư thoại,... và đặc biệt là tổng đài tự động trên đám
                mây cùng một tiếp viên trực điện thoại ảo.
              </Paragragh>
              <Paragragh>
                Các tính năng nhắn tin và tag tên trong kênh chat vẫn được triển
                khai như thông thường.
              </Paragragh>
              <Image src={imageContent31} />
              <Paragragh>
                Với Microsoft Teams, bạn có thể họp trực tuyến, gọi điện và gửi
                tin nhắn cho người khác ở mọi lúc mọi nơi
              </Paragragh>
              <Paragragh>
                <span>
                  Dữ liệu được tập hợp về một nơi duy nhất để tập trung làm việc
                </span>
              </Paragragh>
              <Paragragh>
                Microsoft Teams chia thông tin thành các kênh trong từng nhóm
                riêng biệt, do đó, mỗi người sẽ chỉ thấy các tài nguyên bao gồm
                tin nhắn, tài liệu và yêu cầu gặp mặt liên quan đến các kênh cụ
                thể đó. Do đó, nhân viên của bạn ít bị phân tâm, có thể dễ dàng
                tập trung vào các nhiệm vụ đang thực hiện.
              </Paragragh>
              <Paragragh>
                Tính năng quan trọng khác giúp Teams hỗ trợ công việc thực sự
                hiệu quả là khả năng tích hợp cùng các ứng dụng khác trong bộ
                Office 365 (như Word, Excel,...) dưới dạng các tab. Về cơ bản,
                nhân viên của bạn sẽ không cần rời khỏi ứng dụng Teams mà vẫn có
                thể tiếp tục công việc của mình.
              </Paragragh>
              <Paragragh>
                Tất cả dữ liệu đều được đồng bộ tức thời lên nền tảng đám mây
                của Microsoft.
              </Paragragh>
              <Paragragh>
                <span>
                  Cộng tác dễ dàng hơn với hàng trăm ứng dụng tích hợp
                </span>
              </Paragragh>
              <Paragragh>
                Hơn 400 ứng dụng tích hợp và trình kết nối khác có thể tìm thấy
                trong <span>Microsoft Teams Hub App Store</span>. Nhân viên của
                bạn có thể lựa chọn những công cụ cần thiết để đưa vào Teams,
                tạo ra một hub làm việc nhóm đa dạng.
              </Paragragh>
              <Paragragh>
                Có thể kể đến một số cái tên quen thuộc như:
              </Paragragh>
              <Paragragh>
                {" "}
                Ứng dụng tích hợp miễn phí: Wrike for Teams để quản lý dự án,
                Lucidchart for Teams để vẽ (flowchart) lưu đồ quy trình,
                Workstream.ai để quản lý công việc theo định hướng kết quả,
                Remind để nhắc việc, SurveyMonkey để thực hiện khảo sát nội
                bộ,...
              </Paragragh>
              <Paragragh>
                Ứng dụng có thể phải trả thêm phí: MeisterTask để quản lý công
                việc, Smartsheets for Teams để hỗ trợ cộng tác, chữ ký điện tử
                Signnow,...
              </Paragragh>
              <Paragragh>
                <span>Khả năng bảo mật dữ liệu cao</span>
              </Paragragh>
              <Paragragh>
                Microsoft Teams cung cấp khả năng mã hóa dữ liệu, tin nhắn và
                các tập tin khi được chia sẻ giữa người dùng. Tính năng xác thực
                hai lớp được áp dụng để đảm bảo chỉ các nhân viên của công ty
                bạn mới có thể truy cập tài khoản.
              </Paragragh>
              <Paragragh>
                Hơn nữa, bạn còn có khả năng kiểm soát và hạn chế tính năng mà
                từng nhân viên sử dụng trong ứng dụng, đồng thời hạn chế các nội
                dung, tài liệu không phù hợp trong môi trường công việc.
              </Paragragh>
              <Image src={imageContent32} />
            </div>
            <div id="52">
              <SubHeading>2. Nhược điểm </SubHeading>
              <Paragragh>
                <span>Số lượng kênh bị giới hạn</span>
              </Paragragh>
              <Paragragh>
                Microsoft Teams giới hạn số lượng kênh tối đa là 100 kênh mỗi
                nhóm. Nghĩa là nếu nhóm lớn của doanh nghiệp bạn đã đạt tới giới
                hạn này, bạn sẽ không thể tạo thêm kênh mới - hoặc buộc phải xóa
                đi đi một số kênh. Tuy rằng các tệp được chia sẻ vẫn còn trong
                trang SharePoint dưới dạng sao lưu, nhưng rõ ràng đó là một sự
                bất tiện.
              </Paragragh>
              <Paragragh>
                <span>
                  Cách sắp xếp các tệp chia sẻ đòi hỏi phải quy hoạch chặt chẽ
                  ngay từ đầu
                </span>
              </Paragragh>
              <Paragragh>
                Tất cả mọi dữ liệu tải lên các cuộc hội thoại trong ứng dụng đều
                được đổ vào một site document chung được tạo trên Sharepoint để
                quản lý. Việc tìm kiếm và sắp xếp sẽ thật tiện lợi nếu ngay từ
                đầu Admin hoặc Owner đã quy hoạch chặt chẽ phần này,{" "}
              </Paragragh>
              <Paragragh>
                Tuy nhiên, trong quá trình làm việc thường sẽ phát sinh nhiều
                tệp dữ liệu mà nhân viên mong muốn được đưa vào một thư mục khác
                phân cấp chi tiết hơn để dễ dàng tìm kiếm lại khi cần. Khi số
                lượng thành viên lớn và số lượng tài liệu chia sẻ cũng lớn theo,
                việc tùy chỉnh cấu trúc tệp tài liệu càng cần thiết.
              </Paragragh>
              <Paragragh>
                <span>Cài đặt phân quyền bị hạn chế</span>
              </Paragragh>
              <Paragragh>
                Tương tự như cách sắp xếp file, cài đặt phân quyền của Microsoft
                Teams tối giản về mặt thời gian nhưng không tối ưu khi sử dụng
                lâu dài, thậm chí còn mang lại rủi ro tiềm ẩn.
              </Paragragh>
              <Paragragh>
                Lấy ví dụ, bất cứ ai là thành viên của một nhóm đều tự động có
                quyền truy cập vào tất cả các kênh và tài liệu trong nhóm cùng
                sổ ghi chép OneNote,... Nhưng môi trường công việc đòi hỏi doanh
                nghiệp phải phân tách một số tài liệu đặc biệt và chỉ chia sẻ
                với một số hữu hạn người ở các cấp độ nhất định (xem, nhận xét,
                chỉnh sửa,...). Teams không hỗ trợ điều này, và bạn buộc phải
                tìm cách khác.
              </Paragragh>
              <Paragragh>
                Không cung cấp quyền hạn và cái nhìn tổng quan cho nhà quản trị
              </Paragragh>
              <Paragragh>
                Sự khác biệt duy nhất của bạn - với tư cách là nhà quản trị -
                với nhân viên cấp dưới khi sử dụng Microsoft Teams chỉ là khả
                năng “kiểm soát và hạn chế tính năng mà từng nhân viên sử dụng”.
                Bạn không có khả năng chỉ định phân quyền cho các cấp thành
                viên, cũng như không biết phải quản lý công việc của nhân viên
                như thế nào cho đúng và đủ.
              </Paragragh>
              <Paragragh>
                Bạn có thể giao việc cho nhân viên qua tin nhắn trên Teams với
                điều kiện cả hai bên cố gắng tự ghi nhớ các thông tin đó (chứ hệ
                thống không tự động tổng hợp lại ở một nơi). Khi muốn biết tiến
                độ một công việc hoặc kiểm tra kết quả, bạn phải tiếp tục nhắn
                tin hỏi lại nhân viên. Tới cuối kỳ cần đánh giá hiệu suất làm
                việc, khi mọi dữ liệu đã trôi đi từ lâu, không có cơ sở nào để
                bạn biết nhân viên đang làm việc hiệu quả cao hay thấp. Cách
                giao việc này là thủ công giống như các ứng dụng chat, chỉ mang
                tính chất tạm thời chứ không hề có cái nhìn tổng quan xuyên suốt
                quá trình làm việc.
              </Paragragh>
              <Paragragh>
                Bởi vậy, hai điều bạn có thể kỳ vọng nhiều hơn ở phần mềm MS
                Teams là không gian quản lý công việc tách biệt với các đoạn hội
                thoại khác, và dữ liệu thống kê tự động giúp bạn luôn giám sát
                được tổng thể, ra quyết định đúng đắn và điều chỉnh chiến lược
                kịp thời.
              </Paragragh>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicrosoftTeam;
