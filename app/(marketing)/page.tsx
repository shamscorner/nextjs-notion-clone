import Heading from './_components/heading';

export default function Home() {
  return (
    <div className='flex min-h-full flex-col'>
      <div className='flex flex-1 flex-col items-center justify-center px-6 pb-10 text-center'>
        <Heading />
      </div>
      <div className='bg-green-300'>Footer</div>
    </div>
  );
}
