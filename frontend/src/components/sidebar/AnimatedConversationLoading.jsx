const AnimatedConversationLoading = () => {
    return (
        <>
            <div className="animate-pulse flex gap-2 items-center p-2 py-1">
                <div className="rounded-full bg-slate-700 h-12 w-12"></div>
                <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-3 justify-between">
                        <div className="h-2 w-2/3 bg-slate-700 rounded"></div>
                        <div className="h-6 w-6 rounded-full bg-slate-700"></div>
                    </div>
                </div>
            </div>
            <div className="divider my-0 py-0 h-1"></div>
        </>
    )
}

export default AnimatedConversationLoading;