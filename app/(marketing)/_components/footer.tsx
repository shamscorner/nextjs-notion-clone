import { Button } from '@/components/ui/button';
import Logo from './logo';

const Footer = () => {
  return (
    <div className='z-50 flex w-full items-center bg-background p-6'>
      <div className='hidden w-full sm:block'>
        <Logo />
      </div>

      <div className='flex w-full items-center justify-between gap-x-2 text-muted-foreground sm:ml-auto sm:justify-end'>
        <Button variant='ghost' size='sm'>
          Privacy Policy
        </Button>
        <Button variant='ghost' size='sm'>
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};

export default Footer;
