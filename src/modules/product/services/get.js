import { getAggregate } from "../db/index.js";



const getData = (query) => {
    const { pageSize, pageNumber } = query;
    const skip = (pageNumber - 1) * pageSize;

    return getAggregate([
        // {
        //     $match: {
        //         title: {
        //             $in: ['test 1', 'test 2']
        //         }
        //     }
        // },
        {
            $facet: {
                "data": [
                    { $skip: Number(skip) },
                    { $limit: Number(pageSize) }
                ],
                "metadata": [
                    { $count: "total" }
                ]
            }
        }
    ]);
}

export default getData;