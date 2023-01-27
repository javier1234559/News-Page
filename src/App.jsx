import React from "react";
import styles from "./tailwind-styles";
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
} from "./assets";
import {
  Header,
  Title,
  Heading,
  SubHeading,
  Notes,
  Paragragh,
  Image,
  Footer,
  List,
  MultipleList,
} from "./components";

function App() {
  return (
    <div className="w-full overflow-hidden ">
      <div className={`${styles.wrapper} border-b-[3px] `}>
        <div className={`${styles.container} `}>
          <Header />
        </div>
      </div>
      <div className={`${styles.wrapper}  `}>
        <div className={`${styles.container} `}>
          <div>
            <Image src={imageTitle1} customclass={"!w-[100%]"} />
            <Title>
              <span className="text-customPurple text-[50px]">Cẩm nang</span>:
              Hướng dẫn sử dụng Microsoft Team
            </Title>
            <Heading>LỜI NÓI ĐẦU</Heading>
            <SubHeading customclass={"text-[25px]"}>
              Trong xu hướng phát triển của công nghệ hiện nay, việc tổ chức các
              buổi họp trực tuyến giờ đây đã vô cùng dễ dàng với Microsoft
              Teams. Nhưng bạn đã biết đến Microsoft Teams chưa? Cẩm nang này sẽ
              giới thiệu Microsoft Teams trên máy tính để dạy, học online.
            </SubHeading>
          </div>

          <div>
            <div id="chuong1">
              <Heading>I.GIỚI THIỆU VỀ MICROSOFT TEAMS</Heading>
              <SubHeading customclass={"mb-0"}>
                1. Giới thiệu khái quát
              </SubHeading>
              <MultipleList>
                <List customclass={"list-disc"}>
                  <span className="text-customPurple cursor-pointer font-semibold">
                    Microsoft Teams
                  </span>{" "}
                  ( hay còn gọi là Teams) là một hệ thống cung cấp chat,
                  meetings, notes, và tệp đính kèm.
                </List>
                <List customclass={"list-disc"}>
                  Microsoft công bố Teams tại một buổi hội thảo ở New York, và
                  ra mắt dịch vụ này trên toàn thế giới vào ngày 14 tháng 3 năm
                  2017.
                </List>
                <List customclass={"list-disc"}>
                  Teams của Microsoft được tạo ra và hiện đang được lãnh đạo bởi
                  Brian MacDonald, Phó giám đốc hãng Microsoft.
                </List>
                <List customclass={"list-disc"}>
                  <span>Microsoft Teams</span> là một nền tảng giao tiếp cho
                  doanh nghiệp do Microsoft phát triển và là một phần của
                  Microsoft 365. Teams ,chủ yếu cạnh tranh với dịch vụ tương tự
                  như Slack & Zoom, cung cấp trò chuyện trong không gian làm
                  việc và video meetings, lưu trữ tệp và tích hợp ứng dụng.
                  Teams đang thay thế các nền tảng cộng tác và nhắn tin doanh
                  nghiệp khác của Microsoft bao gồm cả Skype for Business và
                  Microsoft Classroom.
                </List>
              </MultipleList>
              <SubHeading customclass={"mt-8 mb-0"}>2. Tính Năng</SubHeading>
              <MultipleList>
                <List customclass={"title-list"}>
                  a. Tổ chức cuộc họp ở bất kỳ mọi nơi
                </List>
                <Paragragh>
                  Tổ chức hội thảo âm thanh, video và hội thảo web với bất kỳ
                  ai. Ngoài ra, với sự hỗ trợ của Microsoft Teams, người dùng
                  còn nhận các tính năng khác lập lịch biểu, ghi chú cuộc họp,
                  chia sẻ màn hình, ghi cuộc họp và nhắn tin tức thời.
                </Paragragh>
                <Image src={imageContent1} />
                <Paragragh>
                  Người dùng có thể lên lịch cuộc họp Teams với bất kỳ ai có địa
                  chỉ email người tiêu dùng hoặc doanh nghiệp hợp lệ. Họ chỉ cần
                  bấm vào liên kết được gửi qua email để tham gia ngay cuộc họp
                  trên trình duyệt web
                </Paragragh>
                <List customclass={" title-list"}>
                  b. Tổ chức cuộc họp lớn, các sự kiện trực tiếp
                </List>
                <Paragragh>
                  <span>Microsoft Teams</span> còn cho phép mở các cuộc họp lớn,
                  hội thảo trực tuyến, sự kiện toàn công ty và thuyết trình với
                  tối đa 10.000 người dự với trải nghiệm nhất quán trên các nền
                  tảng.
                </Paragragh>
                <Image src={imageContent2} />
                <List customclass={"title-list"}>
                  c. Hỗ trợ người dùng dễ dàng nắm bắt thông tin cuộc họp
                </List>
                <Paragragh>
                  Người dùng có thể ghi âm, quay video và ghi lại hoạt động của
                  cuộc họp bằng chia sẻ màn hình bằng hoặc tạo ghi chú cuộc họp
                  ngay trên Teams. Ngoài ra, bạn còn có thể ghi âm cuộc họp với
                  tính năng được hỗ trợ trên nền tảng Teams.
                </Paragragh>
                <Image src={imageContent3} />
                <Paragragh>
                  Các ghi chú này cũng dễ dàng truy cập giúp người tham gia cuộc
                  họp mới dễ dàng nắm bắt thông tin từ các cuộc họp trước đây
                  hơn.
                </Paragragh>
                <List customclass={"title-list"}>
                  d. Chia sẻ nội dung và cộng tác một cách dễ dàng
                </List>
                <Paragragh>
                  Một trong những ưu điểm của Microsoft Teams đó là bạn có thể
                  chia sẻ nội dung của mình và cộng tác dễ dàng trong suốt cuộc
                  họp thông qua tích hợp liền mạch với <span> Office 365.</span>
                </Paragragh>
                <List customclass={"title-list"}>
                  e. Lưu trữ tài liệu trong Sharepoint
                </List>
                <Paragragh>
                  Khi bạn sử dụng Microsoft Team hệ thống sẽ tự động hỗ trợ một
                  trang SharePoint Online cho mỗi nhóm. Nơi lưu trữ các tài liệu
                  mặc định của mỗi nhóm. Do đó, mỗi dữ liệu chia sẻ trên nhóm sẽ
                  được lưu tự động vào file này. Người dùng có thể tùy chỉnh
                  quyền riêng tư để bảo mật dữ liệu tốt nhất.
                </Paragragh>
                <List customclass={"title-list"}>f. Tạo hội nghị âm thanh</List>
                <Paragragh>
                  Đây là một tính năng tuyệt vời mà không có ở bất kỳ nền tảng
                  nào. Đây là một tính năng giống như là chiếc điện thoại của
                  chúng ta. Bất kỳ ai trong công ty của bạn đều có thể tham gia
                  qua điện thoại. Ngay cả những người dùng đang di chuyển cũng
                  có thể tham gia mà không cần internet. (Lưu ý tính năng này
                  yêu cầu cấp phép bổ sung). Điện thoại liên lạc là trong doanh
                  nghiệp là rất cần thiết nhưng thường với chi phí rất cao. Với
                  team bạn có thể thay thế toàn bộ hệ thống điện thoại trong
                  doanh nghiệp của bạn dễ dàng. Phần miền này hỗ trợ cuộc gọi
                  qua IP (VoIP), giúp doanh nghiệp không phụ thuộc vào nhà cung
                  cấp VoIP tốn phí
                </Paragragh>
                <List customclass={"title-list"}>g. Khả năng tích hợp cao</List>
                <Paragragh>
                  Khi bạn đăng ký một giấy phép của Microsodt 365 bạn có hơn 300
                  ứng dụng dành cho công việc. Ngoài ra, bạn có thể tích hợp
                  thêm các ứng dụng bên ngoài, các ứng dụng bạn thường xuyên sử
                  dụng cũng có thể sử dụng lịch hoạt ngay trong Microsoft Teams.
                  Khi bạn tạo các ghi chú với thời gian và công việc cụ thể Note
                  sẽ nhắc nhở và báo khi công việc đến thời gian thực hiện. Sau
                  khi hoàn thành công việc Note tự động đánh dấu. Sắp xếp các
                  công việc và thời gian thực hiện ưu tiên trước.
                </Paragragh>
                <List customclass={"title-list"}>h. Tính năng chat</List>
                <Paragragh>
                  Trong quá trình làm việc thì trao đổi tức thời là tính năng
                  không thể thiếu. Khi có gợi ý người dùng trong công ty bạn có
                  thể trò chuyện nhanh chóng. Ngoài ra tất cả các tài liệu trong
                  quá trình trao đổi sẽ được tự động lưu lại đê người dùng dễ
                  dàng thao tác. Một bài viết được đăng lên kênh dùng chung mọi
                  thành viên đề có thể xem bài viết hoặc tài liệu đó. Các bạn
                  muốn thêm một người dùng vào xem đơn giản sử dụng “@ + tên
                  thành viên muốn nhắc đến”
                </Paragragh>
              </MultipleList>
            </div>

            <div id="chuong2">
              <Heading customclass={"pt-4"}>
                II. CÁCH CÀI ĐẶT VÀ TRUY CẬP
              </Heading>
              <div id="chuong2-dangnhap">
                <SubHeading>1. Đăng nhập TEAMS:</SubHeading>
                <Paragragh>
                  <span className="bold">Cách 1</span>: Sử dụng trình duyệt
                  Google Chrome hoặc MS Edge để truy cập vào trang chủ MS Teams:{" "}
                  <a href="https://teams.microsoft.com" className="link">
                    https://teams.microsoft.com
                  </a>
                </Paragragh>
                <Image src={imageContent4} customclass={"w-[30%]"} />
                <Paragragh>
                  Sau đó đăng nhập bằng tài khoản email của nhà trường.
                </Paragragh>
                <Notes>
                  <Paragragh>
                    Lưu ý: sau khi nhập tên đăng nhập, chọn Work or School
                    account. Sử dụng email của trường (CBGV @vnu.edu.vn, người
                    học xxxxxxx@st.vnu.edu.vn)
                  </Paragragh>
                </Notes>
                <Paragragh>
                  Hoặc nếu đã từng đăng nhập trước đó, máy sẽ hiện thị tài khoản
                  để đăng nhập
                </Paragragh>
                <Image
                  src={imageContent5}
                  customclass={"w-[30%] !object-contain"}
                />
                <Paragragh>
                  <span className="bold">Cách 2</span>: Download Microsoft Teams
                  về máy tính
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
                  Hệ thống sẽ tự động lựa chọn bản cài đặt phù hợp với máy tính
                  của bạn
                </Paragragh>
                <Paragragh>
                  <span className="bold">Cách 3</span>: Trên thiết bị di động:
                  vào play store (Google) trên thiết bị android hoặc Apple app
                  store để tìm app Micro Teams hoặc click vào đây:
                  <a
                    href="https://products.office.com/vi-vn/microsoft-teams/download-app"
                    className="link"
                  >
                    https://products.office.com/vi-vn/microsoft-teams/download-app
                  </a>
                </Paragragh>
              </div>
              <div id="chuong2taolop">
                <SubHeading>2. Cách tạo lớp</SubHeading>
                <Paragragh>
                  <span className="bold">Bước 1</span>: Tại giao diện chính của
                  Microsoft Teams, chọn mục Nhóm.
                </Paragragh>
                <Image src={imageContent6} />
                <Paragragh>
                  <span className="bold">Bước 2</span>: Chọn Tham gia hoặc tạo
                  nhóm để tiến hành tạo nhóm của bạn.
                </Paragragh>
                <Image src={imageContent7} />

                <Paragragh>
                  <span className="bold">Bước 3</span>: Để tạo nhóm mới cho
                  mình, chọn Tạo nhóm (1). Nếu bạn được mời tham gia nhóm thì
                  bạn có thể nhập mã nhóm vào ô Nhập mã bên phải (2)
                </Paragragh>
                <Image src={imageContent8} />

                <Paragragh>
                  <span className="bold">Bước 4</span>: Sau khi nhấn Tạo nhóm,
                  hệ thống sẽ hiển thị hộp thoại yêu cầu thông tin nhóm của bạn.
                  Bạn có thể nhập Tên nhóm (1), Mô tả (2) và thiết lập Quyền
                  riêng tư (3) của nhóm bằng cách chọn mũi tên bên phải để hiển
                  thị 2 tùy chọn quyền riêng tư: Công khai hoặc Riêng tư
                </Paragragh>
                <Image src={imageContent9} />

                <Paragragh>
                  <span className="bold">Bước 5</span>: Tiếp theo hãy thêm thành
                  viên vào nhóm bằng cách nhập tên hoặc nhóm bạn muốn thêm vào,
                  có thể thêm nhiều thành viên, sau đó nhấn Thêm. Ngoài ra bạn
                  có thể nhấn Bỏ qua nếu bạn muốn thêm thành viên sau.
                </Paragragh>
                <Image src={imageContent10} />

                <Paragragh>
                  <span className="bold">Bước 6</span>: Tên các thành viên mới
                  sẽ hiển thị bên dưới sau khi bạn thêm thành viên. Cuối cùng
                  nhấn Đóng để hoàn tất việc tạo nhóm.
                </Paragragh>
                <Image src={imageContent11} />

                <div id="chuong2taolink">
                  <SubHeading>
                    3. Tạo đường link truy cập hoặc mã truy cập cho sinh viên
                  </SubHeading>
                  <Paragragh>
                    Để chia sẻ phòng họp, học online trên Microsoft Teams bạn
                    chỉ cần nhấn vào biểu tượng 3 dấu chấm ở bên phải tên phòng
                    họp - Chọn Nhận liên kết đến nhóm.
                  </Paragragh>
                  <Image src={imageContent12} />

                  <Paragragh>
                    Chọn Sao chép và gửi đường link đến những người mà bạn muốn
                    chia sẻ phòng họp.
                  </Paragragh>
                  <Image src={imageContent13} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
