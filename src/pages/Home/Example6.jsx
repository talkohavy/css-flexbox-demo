export default function Example6() {
  return (
    <div className='w-full space-y-4'>
      <h2 className='text-xl font-bold'>• Example 6: Order</h2>

      <p>
        You can affect the order of flex items to be different then how they appear in the DOM tree, and that's by using
        a property known as <strong>order</strong>.
      </p>

      <p>The default order of each flex item is 0.</p>

      <p>The lower the order value the higher it appears in the parent container.</p>

      <div>
        <code>
          .flexParent &#123;
          <br />
          &nbsp;&nbsp; display: flex;
          <br />
          &nbsp;&nbsp; flex-direction: column;
          <br />
          &nbsp;&nbsp; align-items: flex-start;
          <br />
          &#125;
        </code>

        <br />
        <br />

        <code>
          .flexItem &#123;
          <br />
          &nbsp;&nbsp; order: 5;
          <br />
          &#125;
        </code>
      </div>

      <div className='flex h-md w-full flex-col items-start justify-between border border-black p-1'>
        <div className='order-5 bg-pink-200 p-2 text-black'>div number 1</div>
        <div className='bg-pink-200 p-2 text-black'>div number 2</div>
        <div className='bg-pink-200 p-2 text-black'>div number 3</div>
        <div className='bg-pink-200 p-2 text-black'>div number 4</div>
        <div className='order-2 bg-pink-200 p-2 text-black'>div number 5</div>
      </div>
    </div>
  );
}
