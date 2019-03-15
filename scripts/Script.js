function setUpXaPhuongFilter(obj) {
	var BaDinh = ["Phúc Xá", "Trúc Bạch", "Vĩnh Phúc", "Cống Vị", "Liễu Giai", "Nguyễn Trung Trực", "Quán Thánh", "Ngọc Hà", "Điện Biên", "Đội Cấn", "Ngọc Khánh", "Kim Mã", "Giảng Võ", "Thành Công"];
	var HoanKiem = ["Phúc Tân", "Đồng Xuân", "Hàng Mã", "Hàng Buồm", "Hàng Đào", "Hàng Bồ", "Cửa Đông", "Lý Thái Tổ", "Hàng Bạc", "Hàng Gai", "Chương Dương Độ", "Hàng Trống", "Cửa Nam", "Hàng Bông", "Tràng Tiền", "Trần Hưng Đạo", "Phan Chu Trinh", "Hàng Bài"];
	var TayHo = ["Phú Thượng", "Nhật Tân", "Tứ Liên", "Quảng An", "Xuân La", "Yên Phụ", "Bưởi", "Thụy Khê"];
	var LongBien = ["Thượng Thanh", "Ngọc Thụy", "Giang Biên", "Đức Giang", "Việt Hưng", "Gia Thụy", "Ngọc Lâm", "Phúc Lợi", "Bồ Đề", "Sài Đồng", "Long Biên", "Thạch Bàn", "Phúc Đồng", "Cự Khối"];
	var CauGiay = ["Nghĩa Đô", "Nghĩa Tân", "Mai Dịch", "Dịch Vọng", "Dịch Vọng Hậu", "Quan Hoa", "Yên Hòa", "Trung Hòa"];
	var DongDa = ["Cát Linh", "Văn Miếu", "Quốc Tử Giám", "Láng Thượng", "Ô Chợ Dừa", "Văn Chương", "Hàng Bột", "Láng Hạ", "Khâm Thiên", "Thổ Quan", "Nam Đồng", "Trung Phụng", "Quang Trung", "Trung Liệt", "Phương Liên", "Thịnh Quang", "Trung Tự", "Kim Liên", "Phương Mai", "Ngã Tư Sở", "Khương Thượng"];
	var HaiBaTrung = ["Nguyễn Du", "Bạch Đằng", "Phạm Đình Hổ", "Bùi Thị Xuân", "Ngô Thì Nhậm", "Lê Đại Hành", "Đồng Nhân", "Phố Huế", "Đống Mác", "Thanh Lương", "Thanh Nhàn", "Cầu Dền", "Bách Khoa", "Đồng Tâm", "Vĩnh Tuy", "Bạch Mai", "Bạch Lôi", "Quỳnh Lôi", "Minh Khai", "Trương Định"];
	var HoangMai = ["Thanh Trì", "Vĩnh Hưng", "Định Công", "Mai Động", "Tương Mai","Đại Kim", "Tân Mai", "Hoàng Văn Thụ", "Giáp Bát", "Lĩnh Nam", "Thịnh Liệt", "Trần Phú", "Hoàng Liệt", "Yên Sở"];
	var ThanhXuan = ["Nhân Chính", "Thượng Đình", "Khương Trung", "Khương Mai", "Thanh Xuân Trung", "Phương Liệt", "Hạ Đình", "Khương Đình", "Thanh Xuân Bắc", "Thanh Xuân Nam", "Kim Giang"];
	var SocSon = ["Thị trấn Sóc Sơn", "Bắc Sơn", "Minh Trí", "Hồng Kì", "Nam Sơn", "Trung Giã", "Tân Hưng", "Minh Phú", "Phù Linh", "Bắc Sơn", "Tân Minh", "Quang Tiến", "Hiền Linh", "Tân Dân", "Tiên Dược", "Việt Long", "Xuân Giang", "Mai Đình", "Đức hòa", "Thanh Xuân", "Đông Xuân", "Kim Lũ", "Phú Cường", "Phú Minh", "Phù Lỗ", "Xuân Thu"];
	var DongAnh = ["Thị trấn Đông Anh", "Xuân Nộn", "Thụy Lâm", "Bắc Hồng", "Nguyên Khê", "Nam Hồng", "Tiên Dương", "Vân Hà", "Uy Nỗ", "Vân Nội", "Liên Hà", "Việt Hùng", "Kim Nỗ", "Kim Chung", "Dục Tú", "Đại Mạch", "Vĩnh Ngọc", "Cỗ Loa", "Hải Bối", "Xuân Canh", "Võng La", "Tầm Xá", "Mai Lâm", "Đông Hội"];
	var GiaLam = ["Thị trấn Yên Viên", "Thị trấn Trâu Quỳ", "Yên Thường", "Yên Viên", "Ninh Hiệp", "Đình Xuyên", "Dương Hà", "Phù Đổng", "Trung Mầu", "Lệ Chi", "Cổ Bi", "Đặng Xá", "Phú Thị", "Kim Sơn", "Dương Quang", "Dương Xá", "Đông Dư", "Đa Tốn", "Kiêu Kỵ", "Bát Tràng", "Kim Lan", "Văn Đức"];
	var NamTuLiem = ["Cầu Diễn", "Đại Mỗ", "Mễ Trì", "Mỹ Đình 1", "Mỹ Đình 2", "Phú Đô", "Phương Canh", "Tây Mỗ", "Trung Văn", "Xuân Phương"];
	var ThanhTri = ["Thị trấn Văn Điển", "Tân Triều", "Thanh Liệt", "Tả Thanh Oai", "Hữu Hòa", "Tam Hiệp", "Tứ Hiệp", "Yên Mỹ", "Vĩnh Quỳnh", "Ngũ Hiệp", "Duyên Hà", "Ngọc Hồi", "Vạn Phúc", "Đại Áng", "Liên Ninh", "Đông Mỹ"];
	var BacTuLiem = ["Cổ Nhuế 1", "Cổ Nhuế 2", "Đông Ngạc", "Đức Thắng", "Liên Mạc", "Minh Khai", "Phú Diễn", "Phúc Diễn", "Tây Tựu", "Thụy Phương", "Thượng Cát", "Xuân Đỉnh", "Xuân Tảo"];
	var MeLinh = ["Đại Thịnh", "Kim Hoa", "Thạch Đà", "Tiến Thắng", "Tự Lập", "Quang Minh", "Thanh Lâm", "Tam Đồng", "Liên Mạc", "Vạn Yên", "Chu Phan", "Tiến Thịnh", "Mê Linh", "Văn Khê", "Hoàng Kim", "Tiền Phong", "Tráng Việt", "Thị trấn Đông Chi"];
	var HaDong = ["Nguyễn Trãi", "Văn Mỗ", "Vạn Phúc", "Yết Kiêu", "Quang Trung", "Văn Quán", "Hà Cầu", "La Khê", "Yên Nghĩa", "Kiến Hưng", "Phú Lãm", "Phú Lương", "Dương Nội", "Đồng Mai", "Biên Giang", "Mộ Lao", "Phú La"];
	var SonTay = ["Lê Lợi", "Phú Thịnh", "Ngô Quyền", "Quang Trung", "Sơn Lộc", "Xuân Khanh", "Đường Lâm", "Viên Sơn", "Xuân Sơn", "Trung Hưng", "Thanh Mỹ", "Trung Sơn Trầm", "Kim Sơn", "Sơn Đông", "Cổ Đông"];
	var BaVi = ["Thị trấn Tây Đằng", "Khánh Thượng", "Phú Cường", "Cổ Đô", "Tản Hồng", "Vạn Thắng", "Châu Sơn", "Phong Vân", "Phú Đông", "Phú Phương", "Phú Châu", "Thái Hòa", "Đồng Thái", "Phú Sơn", "Minh Châu", "Vật Lại", "Chu Minh", "Tòng Bạt", "Cẩm Lĩnh", "Sơn Đà", "Đông Quang", "Tiên Phong", "Thụy An", "Cam Thượng", "Thuần Mỹ", "Tản Lĩnh", "Ba Trại", "Minh Quang", "Ba Vì", "Vân Hòa", "Yên Bài"];
	var PhucTho = ["Thị trấn Phúc Thọ", "Vân Hà", "Vân Phúc", "Vân Nam", "Xuân Phú", "Phương Độ", "Sen Chiểu", "Cẩm Đình", "Võng Xuyên", "Thọ Lộc", "Long Xuyên", "Thượng Cốc", "Hát Môn", "Tích Giang", "Thanh Đa", "Trạch Mỹ Lộc", "Phúc Hòa", "Ngọc Tảo", "Phụng Thượng", "Tam Thuấn", "Tam Hiệp", "Hiệp Thuận", "Liên Hiệp"];
	var DanPhuong = ["Thị trấn Phùng", "Trung Châu", "Thọ An", "Thọ Xuân", "Hồng Hà", "Liên Hồng", "Liên Hà", "Hạ Mỗ", "Liên Trung", "Phương Đình", "Thượng Mỗ", "Tân Hội", "Tân Lập", "Đan Phượng", "Đồng Tháp", "Song Phượng"];
	var HoaiDuc = ["Thị trấn Trạm Trôi", "Đức Thượng", "Minh Khai", "Dương Liễu", "Di Trạch", "Đức Giang", "Cát Quế", "Kim Chung", "Yên Sở", "Sơn Đồng", "Vân Canh", "Đắc Sở", "Lại Yên", "Tiến Yên", "Song Phương", "An Khánh", "An Thượng", "Vân Côn", "La Phù", "Đông La"];
	var QuocOai = ["Thị trấn Quốc Oai", "Sài Sơn", "Thượng Cách", "Yên Sơn", "Ngọc Liệp", "Ngọc Mỹ", "Liệp Tuyết", "Thạch Thán", "Đồng Quang", "Phú Cát", "Tuyết Nghĩa", "Nghĩa Hương", "Cộng Hòa", "Tân Phú", "Đại Thành", "Phú Mãn", "Cấn Hữu", "Tân Hòa", "Hòa Thạch", "Đông Yên", "Đông Xuân"];
	var ThachThat = ["Thị trấn Liên Quan", "Đại Đồng", "Cẩm Yên", "Lại Thượng", "Phú Kim", "Hương Ngải", "Canh Nậu", "Kim Quan", "Dị Nậu", "Bình Yên", "Chàng Sơn", "Thạch Hòa", "Cần Kiệm", "Hữu Bằng", "Phùng Xá", "Tân Xã", "Thạch Xá", "Bình Phú", "Hạ Bằng", "Đồng Trúc", "Yên Trung", "Yên Bình", "Tiến Xuân"];
	var ChuongMy = ["Thị trấn Chúc Sơn", "Thị trấn Xuân Mai", "Phụng Châu", "Tiên Phương", "Đông Sơn", "Đông Phương Yên", "Phú Nghĩa", "Trường Yên", "Ngọc Hòa", "Thủy Xuân Tiên", "Thanh Bình", "Trung Hòa", "Đại Yên", "Thụy Hương", "Tốt Động", "Lam Điền", "Tân Tiến", "Nam Phương Tiến", "Hợp Đồng", "Hoàng Văn Thụ", "Hoàng Diệu", "Hữu Văn", "Quảng Bị", "Mỹ Lương", "Thượng Vực", "Hồng Phong", "Đồng Phú", "Trần Phú", "Văn Võ", "Đồng Lạc", "Hòa Chính", "Phú Nam An"];
	var ThanhOai = ["Thị trấn Kim Bài", "Cự Khê", "Bích Hòa", "Mỹ Hưng", "Cao Viên", "Bình Minh", "Tam Hưng", "Thanh Cao", "Thanh Thùy", "Thanh Mai", "Thanh Văn", "Đỗ Động", "Kim An", "Kim Thư", "Phương Trung", "Tân Ước", "Dân Hòa", "Liên Châu", "Cao Dương"];
	var ThuongTin = ["Thị trấn Thường Tín", "Ninh Sở", "Nhị Khê", "Duyên Thái", "Khánh Hà", "Hòa Bình", "Văn Bình", "Hiền Giang", "Hồng Vân", "Vân Tảo", "Liên Phương", "Văn Phú", "Tự Nhiên", "Tiền Phong", "Hà Hồi", "Thư Phú", "Nguyễn Trãi", "Quất Động", "Chương Dương", "Tân Minh", "Lê Lợi", "Thắng Lợi", "Dũng Tiến", "Thống Nhất", "Nghiêm Xuyên", "Tô Hiệu", "Văn Tự", "Vạn Điểm", "Minh Cường"];
	var PhuXuyen = ["Thị trấn Phú Minh", "Thị trấn Phú Xuyên", "Hồng Minh", "Phượng Dực", "Văn Nhân", "Thụy Phú", "Tri Trung", "Đại Thắng", "Phú Túc", "Văn Hoàng", "Hồng Thái", "Hoàng Long", "Quang Trung", "Nam Phong", "Nam Chiều", "Tân Dân", "Sơn Hà", "Chuyên Mỹ", "Khai Thái", "Phúc Tiến", "Vân Từ", "Chi Thủy", "Đại Xuyên", "Phú Yên", "Bạch Hạ", "Quang Lãn", "Châu Can", "Minh Tân"];
	var UngHoa = ["Thị trấn Vân Đình", "Viên An", "Viên Nội", "Hoa Sơn", "Quảng Phú Cầu", "Trường Thịnh", "Cao Thành", "Liên Bạt", "Sơn Công", "Đồng Tiến", "Phương Tú", "Trung Tú", "Đồng Tân", "Tảo Dương Văn", "Vạn Thái", "Minh Đức", "Hòa Lâm", "Hòa Xá", "Trầm Lộng", "Kim Đường", "Hòa Nam", "Hòa Phú", "Đội Bình", "Đại Hùng","Đông Lỗ", "Phù Lưu", "Đại Cường", "Lưu Hoàng", "Hồng Quang"];
	var MyDuc = ["Thị trấn Đại Nghĩa", "Đồng Tâm", "Thượng Lâm", "Tuy Lai", "Phúc Lâm", "Mỹ Thành", "Bột Xuyên", "An Mỹ", "Hồng Sơn", "Lê Thanh", "Xuy Xá", "Phùng Xá", "Phù Lưu Tế", "Đại Hưng", "Vạn Kim", "Đốc Tín", "Hương Sơn", "Hùng Tiến", "An Tiến", "Hợp Tiến", "Hợp Thanh", "An Phú"];

	var message = document.getElementById('xaPhuongSelect');
	var value = obj.value;
	switch(value) 
	{
		case 'BaDinh': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<BaDinh.length; i++) {
				content += "<option>" + BaDinh[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'HoanKiem': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<HoanKiem.length; i++) {
				content += "<option>" + HoanKiem[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'TayHo': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<TayHo.length; i++) {
				content += "<option>" + TayHo[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'LongBien': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<LongBien.length; i++) {
				content += "<option>" + LongBien[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'CauGiay': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<CauGiay.length; i++) {
				content += "<option>" + CauGiay[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'DongDa': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<DongDa.length; i++) {
				content += "<option>" + DongDa[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'HaiBaTrung': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<HaiBaTrung.length; i++) {
				content += "<option>" + HaiBaTrung[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'HoangMai': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<HoangMai.length; i++) {
				content += "<option>" + HoangMai[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'ThanhXuan': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<ThanhXuan.length; i++) {
				content += "<option>" + ThanhXuan[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'SocSon': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<SocSon.length; i++) {
				content += "<option>" + SocSon[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'DongAnh': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<DongAnh.length; i++) {
				content += "<option>" + DongAnh[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'GiaLam': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<GiaLam.length; i++) {
				content += "<option>" + GiaLam[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'NamTuLiem': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<NamTuLiem.length; i++) {
				content += "<option>" + NamTuLiem[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'ThanhTri': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<ThanhTri.length; i++) {
				content += "<option>" + ThanhTri[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'BacTuLiem': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<BacTuLiem.length; i++) {
				content += "<option>" + BacTuLiem[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'MeLinh': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<MeLinh.length; i++) {
				content += "<option>" + MeLinh[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'HaDong': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<HaDong.length; i++) {
				content += "<option>" + HaDong[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'SonTay': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<SonTay.length; i++) {
				content += "<option>" + SonTay[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'BaVi': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<BaVi.length; i++) {
				content += "<option>" + BaVi[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'PhucTho': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<PhucTho.length; i++) {
				content += "<option>" + PhucTho[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'DanPhuong': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<DanPhuong.length; i++) {
				content += "<option>" + DanPhuong[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'HoaiDuc': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<HoaiDuc.length; i++) {
				content += "<option>" + HoaiDuc[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'QuocOai': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<QuocOai.length; i++) {
				content += "<option>" + QuocOai[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'ThachThat': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<ThachThat.length; i++) {
				content += "<option>" + ThachThat[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'ChuongMy': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<ChuongMy.length; i++) {
				content += "<option>" + ChuongMy[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'ThanhOai': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<ThanhOai.length; i++) {
				content += "<option>" + ThanhOai[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'ThuongTin': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<ThuongTin.length; i++) {
				content += "<option>" + ThuongTin[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'PhuXuyen': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<PhuXuyen.length; i++) {
				content += "<option>" + PhuXuyen[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'UngHoa': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<UngHoa.length; i++) {
				content += "<option>" + UngHoa[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case 'MyDuc': {
			var content = "<option>Chọn xã, phường</option>";
			var i=0;
			for( i=0; i<MyDuc.length; i++) {
				content += "<option>" + MyDuc[i] + "</option>";
			}
			message.innerHTML = content;
			break;
		}
		case '': {
			var content = "<option>Chọn xã, phường</option>";
			message.innerHTML = content;
			break;
		}
	}
}