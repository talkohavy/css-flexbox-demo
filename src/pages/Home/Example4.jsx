export default function Example4() {
  return (
    <div className='w-full space-y-4'>
      <h2 className='text-xl font-bold'>• Example 4:</h2>

      <p>
        This is a very useful one! When you need to have a flex item fill up the rest of the space, while another flex
        item has a fixed size, this is your answer!
      </p>

      <br />

      <div>
        <code>
          .flexParent &#123;
          <br />
          &nbsp;&nbsp; display: flex;
          <br />
          &nbsp;&nbsp; flex-direction: column;
          <br />
          &#125;
        </code>

        <br />
        <br />

        <code>
          .flexItem1 &#123;
          <br />
          &nbsp;&nbsp; height: 60px;
          <br />
          &nbsp;&nbsp; flex-shrink: 0;
          <br />
          &#125;
        </code>

        <br />
        <br />

        <code>
          .flexItem2 &#123;
          <br />
          &nbsp;&nbsp; flex-grow: 1;
          <br />
          &#125;
        </code>
      </div>

      <div className='flex h-xl w-full flex-col items-center justify-between border border-black p-1'>
        <div className='h-15 w-full bg-orange-200' />
        <div className='w-full flex-grow bg-green-200' />
      </div>
    </div>
  );
}
