'use client'

import { useQuery } from "@tanstack/react-query"
import getAllUsers from "./_actions"

const MealSheet = () => {
    const { data: userDataList } = useQuery({
        queryKey: ['users'],
        queryFn: () => getAllUsers(),
    })
    return (
        <div>
            {
                userDataList?.users?.map(
                    (user) => {
                        return (
                            <p key={user._id}>
                                {user.name}
                            </p>
                        )
                    }
                )
            }
        </div>
    )
}

export default MealSheet
