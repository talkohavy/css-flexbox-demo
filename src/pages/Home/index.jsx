export default function HomePage() {
  return (
    <div className='flex h-full w-full flex-col items-start justify-start gap-10 overflow-auto p-8'>
      <h1 className='text-3xl font-bold'>Flexbox Demo</h1>

      <div className='w-full'>
        <h2 className='text-xl font-bold'>• Example 1:</h2>
        <code>
          .flexParent &#123;
          <br />
          &nbsp;&nbsp; display: flex;
          <br />
          &#125;
        </code>

        <div className='flex h-32 w-full border border-black p-1'>
          <div className='outline outline-yellow-300'>Lorem ipsum dolor sit.</div>
          <div className='outline outline-yellow-300'>Lorem, ipsum.</div>
          <div className='outline outline-yellow-300'>Lorem, ipsum dolor.</div>
        </div>
      </div>

      <div className='w-full'>
        <h2 className='text-xl font-bold'>• Example 2:</h2>
        <code>
          .flexParent &#123;
          <br />
          &nbsp;&nbsp; display: flex;
          <br />
          &nbsp;&nbsp; align-items: flex-start;
          <br />
          &#125;
        </code>

        <div className='flex h-32 w-full items-start border border-black p-1'>
          <div className='outline outline-yellow-300'>Lorem ipsum dolor sit.</div>
          <div className='outline outline-yellow-300'>Lorem, ipsum.</div>
          <div className='outline outline-yellow-300'>Lorem, ipsum dolor.</div>
        </div>
      </div>

      <div className='w-full'>
        <h2 className='text-xl font-bold'>• Example 3:</h2>
        <code>
          .flexParent &#123;
          <br />
          &nbsp;&nbsp; display: flex;
          <br />
          &nbsp;&nbsp; justify-content: space-between;
          <br />
          &nbsp;&nbsp; align-items: center;
          <br />
          &#125;
        </code>

        <div className='flex h-32 w-full items-center justify-between border border-black p-1'>
          <div className='outline outline-yellow-300'>Lorem ipsum dolor sit.</div>
          <div className='outline outline-yellow-300'>Lorem, ipsum.</div>
          <div className='outline outline-yellow-300'>Lorem, ipsum dolor.</div>
        </div>
      </div>

      <div className='w-full'>
        <h2 className='text-xl font-bold'>• Example 4:</h2>

        <p>
          This is a very useful one! When you need to have a flex item fill up the rest of the space, while another flex
          item has a fixed size, this is your answer!
        </p>

        <code>
          .flexParent &#123;
          <br />
          &nbsp;&nbsp; display: flex;
          <br />
          &nbsp;&nbsp; flex-direction: column;
          <br />
          &#125;
        </code>

        <code>
          .flexItem1 &#123;
          <br />
          &nbsp;&nbsp; height: 60px;
          <br />
          &nbsp;&nbsp; flex-shrink: 0;
          <br />
          &#125;
        </code>

        <code>
          .flexItem2 &#123;
          <br />
          &nbsp;&nbsp; flex-grow: 1;
          <br />
          &#125;
        </code>

        <div className='flex h-xl w-full flex-col items-center justify-between border border-black p-1'>
          <div className='h-15 w-full bg-orange-200' />
          <div className='w-full flex-grow bg-green-200' />
        </div>
      </div>
    </div>
  );
}
