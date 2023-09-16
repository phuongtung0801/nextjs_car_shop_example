import AntdButton from "@/components/AntdButton";
import Hero from "./Hero";
import BasicTable from "@/components/MUITable";
import { Space } from "antd";


export default async function Home({ searchParams }: any) {

    return (
        <main className='overflow-hidden'>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Hero />
                <BasicTable />
                <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                    <div className="shrink-0 dark:md:hover:bg-fuchsia-600">
                        <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                            Save changes
                        </button>
                    </div>
                    <div>
                        <div className="text-xl font-medium text-black">ChitChat</div>
                        <p className="text-slate-500">You have a new message!</p>
                    </div>

                </div>
                <div>
                    <form>
                        <label className="block">
                            <span className="block text-sm font-medium text-slate-700">Username</span>
                            <input type="text" value="tbone" disabled className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                            "/>
                        </label>
                    </form>

                </div>

                <div className="dark">
                    <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                        <div>
                            <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
                            </span>
                        </div>
                        <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
                        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                        </p>
                    </div>
                </div>
                <div>
                    <AntdButton />
                </div>
            </Space>

        </main>
    );
}