export default function Example3() {
  return (
    <div className='w-full space-y-4'>
      <h2 className='text-xl font-bold'>• Example 3:</h2>

      <div>
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
      </div>

      <div className='flex h-32 w-full items-center justify-between border border-black p-1'>
        <div className='outline outline-yellow-300'>Lorem ipsum dolor sit.</div>
        <div className='outline outline-yellow-300'>Lorem, ipsum.</div>
        <div className='outline outline-yellow-300'>Lorem, ipsum dolor.</div>
      </div>
    </div>
  );
}
