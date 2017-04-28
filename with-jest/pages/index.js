import Link from 'next/link';

export default () => (
  <div>
    <Link prefetch href="foo"><a>Foo</a></Link>
    <style jsx>{`
      p {
        color: red;
      }
    `}</style>
    <p>Hello World!</p>
  </div>
)
