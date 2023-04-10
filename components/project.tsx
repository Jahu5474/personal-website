import React from 'react';
import { useEffect } from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { listUserReposResponse } from "@/hooks/useProjects";


const project = () => {
    // const [selectedId, setSelectedId] = useState(null)
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const fetchRepositories = async () => {
            const response = await listUserReposResponse(process.env.GITHUB_TOKEN);
            setRepositories(response.data);
        };
        fetchRepositories();
    }, []);

    // Rest of the component code
}
return (
    <>



        {/* {projects.map(item => (
                <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
                    <motion.h5>{item.subtitle}</motion.h5>
                    <motion.h2>{item.title}</motion.h2>
                </motion.div>
            ))}

            <AnimatePresence>
                {selectedId && (
                    <motion.div layoutId={selectedId}>
                        <motion.h5>{item.subtitle}</motion.h5>
                        <motion.h2>{item.title}</motion.h2>
                        <motion.button onClick={() => setSelectedId(null)} />
                    </motion.div>
                )}
            </AnimatePresence> */}
    </>
)
}