const Trang2 = () => {
  const dssv = [
    {
      id: 1,
      hoten: "Hachiware",
      lop: "ハチワレ",
      email: "Hachiware@.com",
      anh: "https://i.pinimg.com/736x/e9/78/78/e978780147a94642b515b7770bf1ec56.jpg",
    },
    {
      id: 2,
      hoten: "Rakko",
      lop: "ラッコ",
      email: "Rakko@.com",
      anh: "https://i.pinimg.com/1200x/79/6e/5b/796e5b42d964c7afbdc455a615f5c154.jpg",
    },
    {
      id: 3,
      hoten: "Chiikawa",
      lop: "ちいかわ",
      email: "Chiikawa@.com",
      anh: "https://i.pinimg.com/736x/58/73/60/58736086f7436a1cfb6f4785c4db9624.jpg",
    },
    {
      id: 4,
      hoten: "Usagi",
      lop: "ちいか",
      email: "Usagi@.com",
      anh: "https://i.pinimg.com/736x/ea/df/0d/eadf0d2cee5239b8f8e44055312b7768.jpg",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh", // Chiếm toàn bộ chiều cao màn hình
        display: "flex",
        justifyContent: "center", // Căn giữa ngang

        backgroundColor: "#f9f9f9", // Tuỳ chọn
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
          maxWidth: "1000px", // Giới hạn chiều rộng
          width: "100%",
        }}
      >
        {dssv.map((motsinhvien) => (
          <div
            key={motsinhvien.id}
            style={{
              height: "300px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={motsinhvien.anh}
              alt={motsinhvien.hoten}
              style={{
                height: "140px",

                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
            <h3 style={{ margin: "10px 0 5px" }}>{motsinhvien.hoten}</h3>
            <p>{motsinhvien.lop}</p>
            <p>{motsinhvien.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trang2;
