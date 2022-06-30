<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    /**
     * UserFixtures constructor.
     * @param UserPasswordHasherInterface $passwordHasher
     */
    public function __construct(private UserPasswordHasherInterface $passwordHasher)
    {
    }

    public function load(ObjectManager $manager): void
    {
        $admin = new User();
        $admin->setEmail('admin@upside.com');
        $admin->setFirstname('JF');
        $admin->setLastname('Morin');
        $admin->setRoles(['ROLE_ADMIN']);
        $admin->setPosition('Tech lead');
        $admin->setPassword($this->passwordHasher->hashPassword($admin, 'password'));
        $admin->setAgency($this->getReference('agency_Bordeaux'));
        //$this->addReference('user_1', $admin);
        //$this->addReference('user_' . $admin['user']);
        $manager->persist($admin);
        $manager->flush();

        $user = new User();
        $user->setEmail('user@upside.com');
        $user->setFirstname('Antho');
        $user->setLastname('Gorski');
        $user->setPosition('Product owner');
        $user->setPassword($this->passwordHasher->hashPassword($user, 'password'));
        $user->setAgency($this->getReference('agency_Nice'));
        //$this->addReference('user_2', $user);
        $manager->persist($user);
        $manager->flush();
    }
}

