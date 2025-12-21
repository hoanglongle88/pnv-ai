import { LockOutlined, SafetyCertificateOutlined, HomeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@app/core/types/constants';

const Forbidden: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen flex items-center justify-center p-4 bg-[var(--bg-main)] overflow-hidden relative'>
      {/* Hiệu ứng radar quét bảo mật ở nền */}
      <div className='absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none'>
        <div className='w-[300px] h-[300px] border border-[var(--secondary-blue)] rounded-full animate-ping absolute'></div>
        <div className='w-[500px] h-[500px] border border-[var(--bg-soft)] rounded-full absolute'></div>
      </div>

      <div className='relative z-10 max-w-lg w-full bg-[var(--bg-surface)] border border-[var(--border-light)] rounded-3xl p-8 md:p-12 shadow-[var(--shadow-3d)] text-center backdrop-blur-sm'>
        {/* Icon Bảo mật */}
        <div className='relative inline-flex items-center justify-center mb-6'>
          <div className='absolute inset-0 bg-[var(--primary-orange)] opacity-20 blur-xl rounded-full scale-150'></div>
          <div className='bg-[var(--bg-soft)] p-6 rounded-2xl border border-[var(--border-light)] relative'>
            <LockOutlined className='text-6xl text-[var(--primary-orange)]' />
            <SafetyCertificateOutlined className='absolute -top-2 -right-2 text-2xl text-[var(--secondary-blue)] bg-[var(--bg-surface)] rounded-full p-1' />
          </div>
        </div>

        {/* Nội dung thông báo */}
        <h1 className='text-5xl font-extrabold text-[var(--text-primary)] mb-2 tracking-tight'>
          403
        </h1>
        <h2 className='text-xl font-bold text-[var(--text-primary)] mb-4'>
          Quyền truy cập bị từ chối
        </h2>
        <p className='text-[var(--text-secondary)] mb-10 leading-relaxed'>
          Rất tiếc, tài khoản của bạn không có đủ quyền hạn để truy cập vào khu vực này. Vui lòng
          liên hệ quản trị viên nếu bạn tin rằng đây là một sai sót.
        </p>

        {/* Action Buttons */}
        <div className='space-y-3'>
          <Button
            type='primary'
            size='large'
            block
            icon={<HomeOutlined />}
            onClick={() => navigate(ROUTES.HOME)}
            className='h-12 !bg-[var(--primary-orange)] hover:!bg-[var(--primary-orange-hover)] border-none rounded-xl font-bold shadow-lg shadow-orange-900/20'
          >
            Quay lại trang chủ
          </Button>

          <Button
            type='link'
            className='!text-[var(--secondary-blue)] hover:!text-[var(--secondary-blue-soft)] font-medium'
            onClick={() => window.history.back()}
          >
            Quay lại trang trước đó
          </Button>
        </div>

        {/* Footer Security Note */}
        <div className='mt-8 pt-6 border-t border-[var(--border-light)] flex items-center justify-center gap-2 opacity-40'>
          <span className='text-[10px] uppercase tracking-widest text-[var(--text-secondary)] font-mono'>
            Security Status: restricted_access_detected
          </span>
        </div>
      </div>
    </div>
  );
};

export default Forbidden;
