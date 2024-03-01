export default function Example1() {
  return (
    <div className='w-full space-y-4'>
      <h2 className='text-xl font-bold'>• Example 1:</h2>

      <div>
        <code>
          .flexParent &#123;
          <br />
          &nbsp;&nbsp; display: flex;
          <br />
          &#125;
        </code>
      </div>

      <div className='flex h-32 w-full border border-black p-1'>
        <div className='outline outline-yellow-300'>Lorem ipsum dolor sit.</div>
        <div className='outline outline-yellow-300'>Lorem, ipsum.</div>
        <div className='outline outline-yellow-300'>Lorem, ipsum dolor.</div>
      </div>
    </div>
  );
}
