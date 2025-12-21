import { HomeOutlined, SearchOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom';

import { ROUTES } from '@app/core/types/constants';

const { Title } = Typography;

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center p-6 bg-[var(--bg-main)]'>
      {/* Glow Effect trang trí nền */}
      <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--primary-orange)] opacity-10 blur-[100px] rounded-full'></div>
      <div className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-[var(--secondary-blue)] opacity-10 blur-[100px] rounded-full'></div>

      <div className='relative z-10 max-w-lg w-full bg-[var(--bg-surface)] border border-[var(--border-light)] backdrop-blur-md rounded-3xl p-10 md:p-14 shadow-[var(--shadow-3d)] text-center'>
        {/* Icon Illustration */}
        <div className='relative mb-8 flex justify-center'>
          <div className='absolute inset-0 scale-150 bg-[var(--secondary-blue)] opacity-5 blur-2xl rounded-full'></div>
          <SearchOutlined className='text-7xl text-[var(--secondary-blue)] animate-pulse' />
        </div>

        {/* Text Content */}
        <h1 className='text-7xl font-black text-[var(--text-primary)] mb-2 tracking-tighter'>
          404
        </h1>

        <Title level={3} style={{ color: 'var(--secondary-blue)', marginTop: 0 }}>
          Không tìm thấy trang
        </Title>

        <p className='text-[var(--text-secondary)] mb-10 text-lg leading-relaxed'>
          Có vẻ như đường dẫn bạn đang truy cập không tồn tại hoặc đã được chuyển sang một địa chỉ
          khác.
        </p>

        {/* Action Buttons */}
        <div className='flex flex-col gap-4'>
          <Link to={ROUTES.HOME} className='w-full'>
            <Button
              type='primary'
              size='large'
              block
              icon={<HomeOutlined />}
              className='h-12 !bg-[var(--primary-orange)] hover:!bg-[var(--primary-orange-hover)] border-none rounded-xl font-bold transition-all'
            >
              Quay lại Trang chủ
            </Button>
          </Link>

          <Button
            type='text'
            size='large'
            icon={<ArrowLeftOutlined />}
            onClick={() => window.history.back()}
            className='!text-[var(--text-secondary)] hover:!text-[var(--text-primary)] flex items-center justify-center'
          >
            Quay lại trang trước
          </Button>
        </div>

        {/* Bottom Decoration */}
        <div className='mt-12 flex justify-center gap-2'>
          <span className='w-2 h-2 rounded-full bg-[var(--bg-soft)]'></span>
          <span className='w-8 h-2 rounded-full bg-[var(--primary-orange)]'></span>
          <span className='w-2 h-2 rounded-full bg-[var(--bg-soft)]'></span>
        </div>
      </div>
    </div>
  );
}
