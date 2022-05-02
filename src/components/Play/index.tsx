import Layout from "../Layout";
import { roles, roleOptions, RoleType } from "../../data/roles";
import { useState } from "react";
import { useMemo } from "react";
import shuffle from "../../utils/shuffle";

type TableType = { [role in RoleType]: number };

const initialTable = () => {
  let table: any = {};

  for (let role of roles) {
    table[role] = roleOptions[role].defaultQuantity;
  }

  return table as TableType;
};

const Play: React.FC = () => {
  const [table, setTable] = useState(initialTable());
  const [players, setPlayers] = useState<RoleType[]>([]);

  const totalPlayers = useMemo(
    () => roles.reduce((total, role) => total + table[role], 0),
    [table]
  );

  const toggleParticipation = (role: RoleType) => () =>
    setTable((table) => ({ ...table, [role]: 1 - table[role] }));

  const decrease = (role: RoleType) => () =>
    table[role] > 2 &&
    setTable((table) => ({ ...table, [role]: table[role] - 1 }));

  const increase = (role: RoleType) => () =>
    table[role] < 10 &&
    setTable((table) => ({ ...table, [role]: table[role] + 1 }));

  const shuffleTable = () =>
    setPlayers(
      shuffle(
        roles.flatMap((role) => [...new Array(table[role])].map(() => role))
      )
    );

  const resetTable = () => {
    setPlayers([]);
    setTable(initialTable());
  };

  return (
    <Layout className='relative bg-[#111111]'>
      <div className='bg-grid absolute inset-0 pointer-events-none' />

      <h1 className='text-2xl md:text-2xl text-center max-w-xl mx-auto mt-40 mb-12 px-4'>
        Good morning city! I announce our today&apos;s game of this evening has
        begun!
      </h1>

      <div className='px-2 md:px-8 mb-16'>
        {/* border border-neutral-700 shadow-xl bg-neutral-900/30 backdrop-blur-sm rounded-2xl */}
        <div className='flex flex-col relative sm:flex-row gap-y-8 gap-x-8 lg:gap-x-16 justify-around w-full max-w-md sm:max-w-screen-lg mx-auto py-8 md:py-8 px-6 md:px-16 lg:px-24'>
          <div className='flex flex-col items-center basis-full space-y-6 z-10'>
            <span className='text-lg'>
              Total players: <strong>{totalPlayers}</strong>
            </span>

            <div className='flex flex-col w-full space-y-3'>
              {roles.map((role, i) =>
                roleOptions[role].multiple ? (
                  <div className='flex items-center space-x-3' key={i}>
                    <span className='text-lg whitespace-nowrap flex flex-grow items-center justify-center h-12 px-6 rounded-xl border border-neutral-700 backdrop-blur-[3px]'>
                      {roleOptions[role].emoji} {roleOptions[role].label}
                    </span>

                    <div className='flex items-center space-x-3'>
                      <button
                        className='flex items-center justify-center text-xl font-bold h-12 w-12 rounded-xl border border-neutral-700 backdrop-blur-[3px] md:hover:bg-rose-600 active:bg-rose-600 md:hover:border-rose-500 active:border-rose-500 transition duration-150 ease-out'
                        onClick={decrease(role)}
                      >
                        -
                      </button>
                      <span className='flex items-center justify-center w-6 text-xl text-bold'>
                        {table[role]}
                      </span>
                      <button
                        className='flex items-center justify-center text-xl font-bold h-12 w-12 rounded-xl border border-neutral-700 backdrop-blur-[3px] md:hover:bg-green-600 active:bg-green-600 md:hover:border-green-500 active:border-green-500 transition duration-150 ease-out'
                        onClick={increase(role)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    key={i}
                    className={`text-lg whitespace-nowrap flex items-center justify-center h-12 px-6 rounded-xl border border-neutral-700 backdrop-blur-[3px] md:hover:bg-neutral-600/40 active:bg-neutral-600/40 md:hover:border-neutral-700 active:border-neutral-700 transition duration-150 ease-out ${
                      table[role] ? "bg-neutral-700/30" : ""
                    }`}
                    onClick={toggleParticipation(role)}
                  >
                    {roleOptions[role].emoji} {roleOptions[role].label}
                  </button>
                )
              )}
            </div>

            <div className='flex md:w-full space-x-4'>
              <button className='btn-submit' onClick={shuffleTable}>
                Create table
              </button>
              <button className='btn-secondary' onClick={resetTable}>
                Reset
              </button>
            </div>
          </div>

          <div className='flex flex-col items-center basis-full space-y-4 z-10'>
            <span className='text-lg font-bold'>Player List</span>

            <div className='flex min-h-[20rem] h-full w-full py-9 items-center text-6xl justify-center rounded-lg bg-neutral-800/30 border border-dashed border-neutral-700 backdrop-blur-sm'>
              <div className='flex flex-col text-lg text-neutral-400 space-y-2'>
                {players.length > 0 ? (
                  players.map((role, i) => (
                    <span key={i}>
                      Player №{i + 1}:
                      <span className='font-medium text-white ml-3'>
                        {roleOptions[role].emoji} {roleOptions[role].label}
                      </span>
                    </span>
                  ))
                ) : (
                  <span className='text-6xl'>📋</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Play;
