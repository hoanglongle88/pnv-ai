import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  fullName: yup.string().required('Vui lòng nhập họ tên'),
  username: yup.string().required('Vui lòng nhập username').min(3, 'Tối thiểu 3 ký tự'),
  email: yup.string().required('Vui lòng nhập email').email('Email không đúng định dạng'),
  password: yup
    .string()
    .required('Vui lòng nhập mật khẩu')
    .min(6, 'Mật khẩu phải từ 6 ký tự trở lên'),
});

export const loginSchema = yup.object().shape({
  email: yup.string().required('Vui lòng nhập email').email('Email không đúng định dạng'),
  password: yup
    .string()
    .required('Vui lòng nhập mật khẩu')
    .min(6, 'Mật khẩu phải từ 6 ký tự trở lên'),
});
