export default function Home() {
  return (
    <main className='min-h-screen parallax'>
      <div className='h-[500svh] w-full'>
        <div className='w-full h-[100svh]' />
        <div className='bg-green-500 w-full h-[100svh]' />
        <div className='w-full h-[100svh] test' />
        <div className='bg-yellow-500 w-full h-[100svh]'>
          <div className='test w-1/2 h-1/2' />
        </div>
        <div className='bg-red-500 w-full h-[100svh] flex items-center justify-center test-2'></div>
        <div className='w-full h-[100svh]' />
      </div>

      {/* <div className='layer1'>LAYER 1</div> */}
      <div className='layer2'>LAYER 2</div>
      <div className='layer3'>LAYER 3</div>
    </main>
  );
}
