import BackBtn from "@/components/backBtn"

export default function Layout({
  users,
  analytics,
  children,
}: {
  users: React.ReactNode
  analytics: React.ReactNode
  children: React.ReactNode
}) {
    return (
      <div className="p-4">
      <h2 className="custom-header">Parallel Routes <span><BackBtn/></span></h2>
      {/* <BackBtn/> */}
      <div className="grid grid-cols-2 gap-2">
      {/* <div className="flex justify-around items-center"> */}
        <div>{users}</div>
        <div>{analytics}</div>
      </div>
        {children}
      </div>
    )
  }