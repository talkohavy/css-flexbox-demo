export default function Example5() {
  return (
    <div className='w-full space-y-4'>
      <h2 className='text-xl font-bold'>• Example 5:</h2>

      <p>Another useful one for when you need a different alignment for a flex item.</p>

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
          .flexItemTitle &#123;
          <br />
          &nbsp;&nbsp; align-self: center;
          <br />
          &#125;
        </code>

        <br />
        <br />

        <code>
          .flexItemButton &#123;
          <br />
          &nbsp;&nbsp; align-self: end;
          <br />
          &#125;
        </code>
      </div>

      <div className='flex h-xl w-full flex-col items-start justify-between border border-black p-1'>
        <h2 className='self-center border border-blue-500 text-lg font-bold'>This is the title</h2>

        <p className='border border-blue-500'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quasi nemo veniam aut nobis, ullam consectetur
          est reiciendis ipsa quam quia aliquid.
        </p>

        <p className='border border-blue-500'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quasi nemo veniam aut nobis, ullam consectetur
          est reiciendis ipsa quam quia aliquid.
        </p>

        <p className='border border-blue-500'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quasi nemo veniam aut nobis, ullam consectetur
          est reiciendis ipsa quam quia aliquid.
        </p>

        <button
          type='button'
          className='cursor-pointer self-end rounded border border-black bg-red-500 p-2 text-white hover:rounded-lg'
        >
          Click me
        </button>
      </div>
    </div>
  );
}
