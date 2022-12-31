import { useState, useEffect } from "react";

const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const memoMessage = async () => {
      const memos = await contract.getmemos();
      setMemos(memos);
    };
    contract && memoMessage();
  }, [contract]);

  return (
    <div>
      <p>Messages</p>
      {memos.map((memo) => {
        return (
          <table key={memo.timestamp} class="table table-bordered">
            <tbody>
              <tr>
                <td class="table-primary">{memo.name}</td>
                <td class="table-secondary">{memo.message}</td>
                <td class="table-success">{String(memo.timestamp)}</td>
                <td class="table-danger">{memo.from}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default Memos;
