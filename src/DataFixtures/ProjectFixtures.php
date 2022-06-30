<?php

namespace App\DataFixtures;

use DateTime;
use App\Entity\Project;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class ProjectFixtures extends Fixture implements DependentFixtureInterface
{
    public const PROJECTS = [
        ['name' => 'Conseil en organisation dans l\'assurance',
        'description' => 'Le Comité de Direction se trouve dans une situation complexe, et fait le constat de difficultés entre ses membres. Le CODIR ne parvient pas à prendre sereinement et efficacement de décisions : les changements opérationnels ne peuvent donc être mis en œuvre.',
        'created_at' => '2022-06-10',
        'ended_at' => '2022-07-10',
        'status' => true,
        'category' => 'category_Conseil',
        'agency' => 'agency_Bordeaux'
        ],

        ['name' => 'La conception UX pour application desktop',
        'description' => 'Le besoin de notre client, évoluant dans un contexte projet agile, est d’intégrer toutes les parties-prenantes dès la phase de conception de l’application. En intégrant un UX designer, celui-ci a pour rôle de couvrir à la fois la partie fonctionnelle mais également d’assurer une conception centrée sur les besoins des utilisateurs finaux.',
        'created_at' => '2022-05-20',
        'ended_at' => '2022-06-10',
        'status' => false,
        'category' => 'category_Infrastructure',
        'agency' => 'agency_Nice'
        ]
    ];


    public function load(ObjectManager $manager): void
    {
        foreach (self::PROJECTS as $projectName) {
            $project = new Project();
            $project->setName($projectName['name']);
            $project->setDescription($projectName['description']);
            $project->setCreatedAt(new DateTime($projectName['created_at']));
            $project->setEndedAt(new DateTime($projectName['ended_at']));
            $project->setStatus($projectName['status']);
            $project->setCategory($this->getReference($projectName['category']));
            $project->setAgency($this->getReference($projectName['agency']));
            $manager->persist($project);
            $this->addReference('project_' . $projectName['name'], $project);
        }
        $manager->flush();
    }


    public function getDependencies()
    {
        // Tu retournes ici toutes les classes de fixtures dont ProgramFixtures dépend
        return [
        CategoryFixtures::class,
        AgencyFixtures::class,
        ];
    }
}
